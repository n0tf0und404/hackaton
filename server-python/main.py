from fastapi import FastAPI, WebSocket
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from stream_data import websocket_endpoint

app = FastAPI()

class CodeBody(BaseModel):
    code: str

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permite todas las orígenes, puedes especificar dominios específicos
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return "Hello World!"

@app.websocket("/ws/chat")
def consult_websocket(websocket: WebSocket):
    return websocket_endpoint(websocket)