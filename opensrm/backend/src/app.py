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
from uuid import uuid4

from fastapi.middleware.cors import CORSMiddleware

from sympy.parsing.latex import parse_latex

PyObjectId = Annotated[str, BeforeValidator(str)]

class UserAccountModel(BaseModel):
        id: Optional[PyObjectId] = Field(alias="_id", default=None)
        email: str
        session: str
        topics: dict[str, int] # topic, mastery score
        points: int

class ProblemModel(BaseModel):
    id: Optional[PyObjectId] = Field(alias="_id", default=None)
    topic: str
    math_question_text: str
    math_question_image_url: Optional[str]
    math_question_answer: float

load_dotenv()

uri = os.getenv('MONGODB_URL')
client = MongoClient(uri,
                     tls=True,
                     tlsCertificateKeyFile=os.getenv('X509_CERT'),
                     server_api=ServerApi('1'))

db = client['opensrm']
account_collection = db['accounts']
problem_collection = db['problems']

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"response": "OK"}

@app.get("/db")
async def root():
    doc_count = account_collection.count_documents({})
    return {"message": doc_count}

@app.post(
    "/login/{email}",
)
async def signup(email: str):

    s = str(uuid4())

    user = UserAccountModel(
        id=str(uuid4()),
        email=email,
        session=s,
        topics={},
        points=0
    )

    search = account_collection.find_one({"email": email})

    if search is not None:
        return {"token": search["session"]}
    else:
        account_collection.insert_one(
            user.model_dump(by_alias=True, exclude=["id"])
        )
        return {"token": s}
    
@app.get(
     "/account/{token}"
)
async def account(token: str):
    token = token.split('=')[1]

    search = account_collection.find_one({"session": token})

    u = UserAccountModel(**search)

    return {"user": u}

@app.put(
        "/account/{token}"
)
async def accountAddTopic(token: str, name: str, mastery: int):
    if '='  in token:
        token = token.split('=')[1]

    search = account_collection.find_one({"session": token})

    u = UserAccountModel(**search)
    u.topics[name] = mastery


    account_collection.update_one({"session": token}, {
        '$set': {
            'topics': u.topics
        }
    })

@app.post(
     "/problem/"
)
async def addProblem(p: ProblemModel):
    problem_collection.insert_one(
        p.model_dump(by_alias=True, exclude=["id"])
    )

@app.get(
    "/problem/{topic}"
)
async def getProblems(topic: str):
    res = list(problem_collection.find({"topic": topic}))

    for r in res:
        r["_id"] = str(r["_id"])
    
    return res

@app.post("/evaluate/{expression}")
async def evaluate(expression: str):
    expr = parse_latex(expression, backend="antlr")
    r = expr.evalf(subs=dict(x=4))

    return {"answer": str(r)}