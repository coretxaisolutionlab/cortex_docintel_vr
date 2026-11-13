"""
Database connection and session configuration for DocIntel.
Supports SQLite (default) and PostgreSQL via DATABASE_URL.
"""

import os
from contextlib import contextmanager

try:
    from sqlalchemy import create_engine
    from sqlalchemy.orm import declarative_base, sessionmaker

    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    DEFAULT_SQLITE_URL = f"sqlite:///{os.path.join(BASE_DIR, 'docintel.db')}"

    DATABASE_URL = os.getenv("DATABASE_URL", DEFAULT_SQLITE_URL)

    connect_args = {"check_same_thread": False} if DATABASE_URL.startswith("sqlite") else {}

    engine = create_engine(DATABASE_URL, connect_args=connect_args)
    SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
    Base = declarative_base()

    def get_db():
        """FastAPI dependency or general context generator for database sessions."""
        db = SessionLocal()
        try:
            yield db
        finally:
            db.close()

except ImportError:
    # If SQLAlchemy is not installed in the current environment
    Base = object
    engine = None
    SessionLocal = None

