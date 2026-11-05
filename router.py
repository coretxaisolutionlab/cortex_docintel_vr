from fastapi import APIRouter
from app.api.v1.endpoints import documents, qa, summary, extraction, comparison

api_router = APIRouter()

@api_router.get("/health")
def health_check():
    return {"status": "healthy", "message": "DocIntel AI Backend is running"}

api_router.include_router(documents.router, prefix="/documents", tags=["Documents"])
api_router.include_router(qa.router, prefix="/qa", tags=["Q&A"])
api_router.include_router(summary.router, prefix="/summary", tags=["Summarization"])
api_router.include_router(extraction.router, prefix="/extraction", tags=["Extraction"])
api_router.include_router(comparison.router, prefix="/comparison", tags=["Comparison"])