import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from livekit import api
from dotenv import load_dotenv

from api import api_router
from database import init_mongodb, mongodb_client

load_dotenv()

LIVEKIT_API_KEY = os.getenv("LIVEKIT_API_KEY")
LIVEKIT_API_SECRET = os.getenv("LIVEKIT_API_SECRET")
LIVEKIT_URL = os.getenv("LIVEKIT_URL")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router)

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.on_event("startup")
async def startup_event():
    if not all([LIVEKIT_API_KEY, LIVEKIT_API_SECRET, LIVEKIT_URL]):
        raise RuntimeError("Missing LiveKit environment variables")
    app.state.lkapi = api.LiveKitAPI(
        url=LIVEKIT_URL,
        api_key=LIVEKIT_API_KEY,
        api_secret=LIVEKIT_API_SECRET,
    )
    init_mongodb()


@app.on_event("shutdown")
async def shutdown_event():
    await app.state.lkapi.aclose()
    if mongodb_client:
        mongodb_client.close()


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", port=3001, reload=True)
