-- DocIntel Database Schema (SQLite Version)
-- Cortex Intelligence and Technologies
-- Product: DocIntel (Intelligent Document Processing & Analysis)

PRAGMA foreign_keys = ON;

-- 1. Users Table
CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    full_name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role TEXT CHECK(role IN ('Admin', 'Project Operator', 'Analyst', 'Viewer')) DEFAULT 'Viewer',
    organization TEXT DEFAULT 'Cortex Intelligence and Technologies',
    is_active INTEGER DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 2. Document Categories / Use Cases
CREATE TABLE IF NOT EXISTS categories (
    id TEXT PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    industry TEXT NOT NULL,
    description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 3. Documents Table (PDFs)
CREATE TABLE IF NOT EXISTS documents (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    category_id TEXT,
    title TEXT NOT NULL,
    original_filename TEXT NOT NULL,
    storage_path TEXT NOT NULL,
    file_size_bytes INTEGER NOT NULL,
    file_hash TEXT NOT NULL,
    mime_type TEXT DEFAULT 'application/pdf',
    page_count INTEGER DEFAULT 0,
    processing_status TEXT CHECK(processing_status IN ('PENDING', 'PROCESSING', 'COMPLETED', 'FAILED')) DEFAULT 'PENDING',
    error_message TEXT,
    is_archived INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    processed_at DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL
);

-- 4. Extracted Document Pages & Text
CREATE TABLE IF NOT EXISTS document_pages (
    id TEXT PRIMARY KEY,
    document_id TEXT NOT NULL,
    page_number INTEGER NOT NULL,
    raw_text TEXT NOT NULL,
    word_count INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (document_id) REFERENCES documents(id) ON DELETE CASCADE,
    UNIQUE(document_id, page_number)
);

-- 5. Data Extractions (Key-Values, Tables, Entities)
CREATE TABLE IF NOT EXISTS document_extractions (
    id TEXT PRIMARY KEY,
    document_id TEXT NOT NULL,
    extraction_type TEXT CHECK(extraction_type IN ('KEY_VALUE', 'ENTITIES', 'TABLES', 'METADATA', 'FINANCIAL', 'LEGAL_CLAUSES', 'CUSTOM')) NOT NULL,
    extracted_data TEXT NOT NULL, -- JSON string
    confidence_score REAL DEFAULT 1.0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (document_id) REFERENCES documents(id) ON DELETE CASCADE
);

-- 6. AI Summaries
CREATE TABLE IF NOT EXISTS document_summaries (
    id TEXT PRIMARY KEY,
    document_id TEXT NOT NULL,
    summary_type TEXT CHECK(summary_type IN ('EXECUTIVE', 'CONCISE', 'DETAILED', 'BULLET_POINTS', 'SECTION_BY_SECTION')) NOT NULL,
    summary_text TEXT NOT NULL,
    key_takeaways TEXT, -- JSON array of bullet points
    ai_model TEXT DEFAULT 'gemini-1.5-pro',
    prompt_tokens INTEGER DEFAULT 0,
    completion_tokens INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (document_id) REFERENCES documents(id) ON DELETE CASCADE
);

-- 7. Document Chunks (for RAG & Vector Search readiness)
CREATE TABLE IF NOT EXISTS document_chunks (
    id TEXT PRIMARY KEY,
    document_id TEXT NOT NULL,
    page_number INTEGER,
    chunk_index INTEGER NOT NULL,
    chunk_text TEXT NOT NULL,
    token_count INTEGER,
    embedding_json TEXT, -- JSON array of embedding vectors
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (document_id) REFERENCES documents(id) ON DELETE CASCADE
);

-- 8. Chat with PDF (Sessions & Messages)
CREATE TABLE IF NOT EXISTS chat_sessions (
    id TEXT PRIMARY KEY,
    document_id TEXT NOT NULL,
    user_id TEXT NOT NULL,
    title TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (document_id) REFERENCES documents(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS chat_messages (
    id TEXT PRIMARY KEY,
    session_id TEXT NOT NULL,
    sender TEXT CHECK(sender IN ('USER', 'AI', 'SYSTEM')) NOT NULL,
    message_text TEXT NOT NULL,
    sources_cited TEXT, -- JSON array of citations/page numbers
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (session_id) REFERENCES chat_sessions(id) ON DELETE CASCADE
);

-- 9. Audit Logs & Privacy
CREATE TABLE IF NOT EXISTS audit_logs (
    id TEXT PRIMARY KEY,
    user_id TEXT,
    document_id TEXT,
    action TEXT NOT NULL,
    details TEXT,
    ip_address TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
    FOREIGN KEY (document_id) REFERENCES documents(id) ON DELETE SET NULL
);

-- Performance Indexes
CREATE INDEX IF NOT EXISTS idx_documents_user ON documents(user_id);
CREATE INDEX IF NOT EXISTS idx_documents_status ON documents(processing_status);
CREATE INDEX IF NOT EXISTS idx_documents_hash ON documents(file_hash);
CREATE INDEX IF NOT EXISTS idx_pages_doc ON document_pages(document_id);
CREATE INDEX IF NOT EXISTS idx_extractions_doc ON document_extractions(document_id);
CREATE INDEX IF NOT EXISTS idx_summaries_doc ON document_summaries(document_id);
CREATE INDEX IF NOT EXISTS idx_chunks_doc ON document_chunks(document_id);
CREATE INDEX IF NOT EXISTS idx_chat_messages_session ON chat_messages(session_id);
CREATE INDEX IF NOT EXISTS idx_audit_created ON audit_logs(created_at);

