from datetime import datetime, timezone

from database import get_conversation_collection
from services.survey import serialize_doc


def create_conversation(
    respondent_id: str,
    role: str,
    content: str,
    metadata: dict | None = None,
) -> dict:
    """Insert one conversation message. id is MongoDB _id."""
    coll = get_conversation_collection()
    now = datetime.now(timezone.utc)
    doc = {
        "respondent_id": respondent_id,
        "role": role,
        "content": content,
        "metadata": metadata or {},
        "created_at": now,
        "updated_at": now,
    }
    result = coll.insert_one(doc)
    doc["_id"] = result.inserted_id
    return doc


def get_conversations_by_respondent(respondent_id: str) -> list[dict]:
    """Return all conversation messages for a respondent, ordered by created_at."""
    coll = get_conversation_collection()
    cursor = coll.find({"respondent_id": respondent_id}).sort("created_at", 1)
    return list(cursor)
