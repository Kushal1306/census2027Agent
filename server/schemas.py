from pydantic import BaseModel


class DispatchRequest(BaseModel):
    phone_number: str
    language: str
    transfer_to: str | None = None


class SurveyResponseInput(BaseModel):
    respondent_id: str
    question_id: str
    response: str
    metadata: dict | None = None


class ConversationCreate(BaseModel):
    respondent_id: str
    role: str
    content: str
    metadata: dict | None = None
