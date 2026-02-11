import traceback

from fastapi import APIRouter, HTTPException, Query
from fastapi.responses import JSONResponse

from schemas import ConversationCreate
from services.conversation import create_conversation, get_conversations_by_respondent
from services.survey import serialize_doc

router = APIRouter(prefix="/conversation", tags=["conversation"])


@router.post("")
async def post_conversation(body: ConversationCreate):
    """Create/post a single conversation message."""
    try:
        doc = create_conversation(
            respondent_id=body.respondent_id,
            role=body.role,
            content=body.content,
            metadata=body.metadata,
        )
        return JSONResponse(serialize_doc(doc))
    except Exception as e:
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=f"{e.__class__.__name__}: {e}")


@router.get("")
async def list_conversations(
    respondent_id: str = Query(..., description="Filter by respondent id"),
):
    """Get all conversation messages for a respondent."""
    try:
        docs = get_conversations_by_respondent(respondent_id)
        return JSONResponse([serialize_doc(d) for d in docs])
    except Exception as e:
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=f"{e.__class__.__name__}: {e}")
