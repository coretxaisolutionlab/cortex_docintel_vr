from pydantic import BaseModel
from typing import Optional

class QuestionRequest(BaseModel):
    document_id: str
    question: str

class QuestionResponse(BaseModel):
    document_id: str
    question: str
    answer: str
    source_page: Optional[int] = None
    relevant_text: Optional[str] = None