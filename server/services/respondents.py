from datetime import datetime, timezone

from database import get_respondents_collection


def create_or_get_respondent(phone_number: str, language_code: str) -> dict:
    """Create a new respondent or return existing one by phone_number."""
    coll = get_respondents_collection()
    now = datetime.now(timezone.utc)
    doc = coll.find_one({"phone_number": phone_number})
    if doc:
        coll.update_one(
            {"_id": doc["_id"]},
            {"$set": {"language_code": language_code, "updated_at": now}},
        )
        doc["language_code"] = language_code
        doc["updated_at"] = now
        return doc
    new_doc = {
        "phone_number": phone_number,
        "language_code": language_code,
        "created_at": now,
        "updated_at": now,
    }
    result = coll.insert_one(new_doc)
    new_doc["_id"] = result.inserted_id
    return new_doc
