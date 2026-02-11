import traceback

from fastapi import APIRouter, HTTPException
from fastapi.responses import JSONResponse

from schemas import SurveyResponseInput
from services import create_survey_response, serialize_doc

router = APIRouter(prefix="/survey-response", tags=["survey"])


@router.post("")
async def submit_survey_response(body: SurveyResponseInput):
    """Store one survey response linked to a respondent."""
    try:
        doc = create_survey_response(
            respondent_id=body.respondent_id,
            question_id=body.question_id,
            response=body.response,
            metadata=body.metadata,
        )
        return JSONResponse(serialize_doc(doc))
    except Exception as e:
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=f"{e.__class__.__name__}: {e}")
