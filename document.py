from sqlalchemy import Column, String, DateTime
from datetime import datetime
from app.db.session import Base

class Document(Base):
    __tablename__ = "documents"

    id = Column(String, primary_key=True, index=True)
    original_filename = Column(String, nullable=False)
    saved_filename = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)