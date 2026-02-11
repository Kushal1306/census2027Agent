import os

from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv()

MONGODB_URL = os.getenv("MONGO_URL")
DATABASE_NAME = os.getenv("MONGO_DB_NAME")

RESPONDENTS_COLLECTION = "respondents"
SURVEY_RESPONSES_COLLECTION = "survey_responses"
CONVERSATION_COLLECTION = "conversation"

mongodb_client: MongoClient | None = None
db = None


def init_mongodb():
    """Initialize MongoDB connection."""
    global mongodb_client, db
    try:
        mongodb_client = MongoClient(MONGODB_URL)
        db = mongodb_client[DATABASE_NAME]
        mongodb_client.admin.command("ping")
        print("✅ MongoDB connection successful")
        return db
    except Exception as e:
        print(f"❌ MongoDB connection failed: {e}")
        raise e


def get_respondents_collection():
    if db is None:
        init_mongodb()
    return db[RESPONDENTS_COLLECTION]


def get_survey_responses_collection():
    if db is None:
        init_mongodb()
    return db[SURVEY_RESPONSES_COLLECTION]


def get_conversation_collection():
    if db is None:
        init_mongodb()
    return db[CONVERSATION_COLLECTION]
