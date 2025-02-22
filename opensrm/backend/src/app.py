import os
from dotenv import load_dotenv
from typing import Optional, List

from fastapi import FastAPI, Body, HTTPException, status
from fastapi.responses import Response
from pydantic import ConfigDict, BaseModel, Field, EmailStr
from pydantic.functional_validators import BeforeValidator

from typing_extensions import Annotated

from bson import ObjectId
import motor.motor_asyncio
from pymongo import ReturnDocument

from pymongo import MongoClient
from pymongo.server_api import ServerApi

load_dotenv()

uri = os.getenv('MONGODB_URL')
client = MongoClient(uri,
                     tls=True,
                     tlsCertificateKeyFile=os.getenv('X509_CERT'),
                     server_api=ServerApi('1'))

db = client['sample_mflix']
collection = db['comments']

from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    doc_count = collection.count_documents({})
    return {"message": doc_count}