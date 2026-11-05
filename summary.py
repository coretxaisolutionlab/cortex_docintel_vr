from pydantic import BaseModel
from typing import List

class SummaryRequest(BaseModel):
    document_id: str

class SummaryResponse(BaseModel):
    document_id: str
    summary: str
    key_points: List[str]