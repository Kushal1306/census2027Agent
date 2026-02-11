from fastapi import APIRouter

from .routes import dispatch_router, survey_router, conversation_router

api_router = APIRouter()

api_router.include_router(dispatch_router)
api_router.include_router(survey_router)
api_router.include_router(conversation_router)
