from datetime import datetime, timezone

from database import get_survey_responses_collection


def create_survey_response(
    respondent_id: str,
    question_id: str,
    response: str,
    metadata: dict | None = None,
) -> dict:
    """Insert one survey response. response_id is MongoDB _id."""
    coll = get_survey_responses_collection()
    now = datetime.now(timezone.utc)
    doc = {
        "respondent_id": respondent_id,
        "question_id": question_id,
        "response": response,
        "metadata": metadata or {},
        "created_at": now,
        "updated_at": now,
    }
    result = coll.insert_one(doc)
    doc["_id"] = result.inserted_id
    return doc


def serialize_doc(doc: dict) -> dict | None:
    """Convert MongoDB doc to JSON-serializable dict with id instead of _id."""
    if doc is None:
        return None
    out = dict(doc)
    if "_id" in out:
        out["id"] = str(out["_id"])
        del out["_id"]
    for key in ("created_at", "updated_at"):
        if key in out and hasattr(out[key], "isoformat"):
            out[key] = out[key].isoformat()
    return out
