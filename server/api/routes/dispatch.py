import os
import random
import traceback

from fastapi import APIRouter, HTTPException, Request
from fastapi.responses import JSONResponse
from bson.json_util import dumps
from livekit import api
from dotenv import load_dotenv

from schemas import DispatchRequest
from services import create_or_get_respondent

load_dotenv()

LIVEKIT_API_KEY = os.getenv("LIVEKIT_API_KEY")
LIVEKIT_API_SECRET = os.getenv("LIVEKIT_API_SECRET")
LIVEKIT_URL = os.getenv("LIVEKIT_URL")

router = APIRouter(prefix="/dispatch", tags=["dispatch"])


@router.post("")
async def dispatch(request: DispatchRequest, req: Request):
    """Accept phone_number and language. Create/find respondent, then dispatch agent."""
    print("🚀 DispatchRequest:", request.model_dump())
    try:
        app = req.app
        respondent = create_or_get_respondent(request.phone_number, request.language)
        respondent_id = str(respondent["_id"])

        room_name = f"census_room_{respondent_id}_{random.randint(1000, 9999)}"
        metadata = {
            "respondent_id": respondent_id,
            "phone_number": request.phone_number,
            "transfer_to": request.transfer_to or os.getenv("TRANSFER_TO_NUMBER"),
            "language": request.language,
        }

        lk = app.state.lkapi
        await lk.agent_dispatch.create_dispatch(
            api.CreateAgentDispatchRequest(
                agent_name=os.getenv("AGENT_NAME"),
                room=room_name,
                metadata=dumps(metadata),
            )
        )

        return JSONResponse({
            "roomName": room_name,
            "respondent_id": respondent_id,
            "serverUrl": LIVEKIT_URL,
        })
    except Exception as e:
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=f"{e.__class__.__name__}: {e}")