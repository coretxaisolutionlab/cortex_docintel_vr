-- DocIntel Database Schema (PostgreSQL Version)
-- Cortex Intelligence and Technologies
-- Product: DocIntel (Intelligent Document Processing & Analysis)

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-- Optional: Enable pgvector for embedding searches
-- CREATE EXTENSION IF NOT EXISTS vector;

-- 1. Users Table
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) CHECK (role IN ('Admin', 'Project Operator', 'Analyst', 'Viewer')) DEFAULT 'Viewer',
    organization VARCHAR(255) DEFAULT 'Cortex Intelligence and Technologies',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 2. Document Categories / Use Cases
CREATE TABLE IF NOT EXISTS categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) UNIQUE NOT NULL,
    industry VARCHAR(100) NOT NULL,
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 3. Documents Table (PDFs)
CREATE TABLE IF NOT EXISTS documents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
    title VARCHAR(500) NOT NULL,
    original_filename VARCHAR(500) NOT NULL,
    storage_path TEXT NOT NULL,
    file_size_bytes BIGINT NOT NULL,
    file_hash VARCHAR(64) NOT NULL,
    mime_type VARCHAR(100) DEFAULT 'application/pdf',
    page_count INT DEFAULT 0,
    processing_status VARCHAR(50) CHECK (processing_status IN ('PENDING', 'PROCESSING', 'COMPLETED', 'FAILED')) DEFAULT 'PENDING',
    error_message TEXT,
    is_archived BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    processed_at TIMESTAMPTZ
);

-- 4. Extracted Document Pages & Text
CREATE TABLE IF NOT EXISTS document_pages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    document_id UUID NOT NULL REFERENCES documents(id) ON DELETE CASCADE,
    page_number INT NOT NULL,
    raw_text TEXT NOT NULL,
    word_count INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(document_id, page_number)
);

-- 5. Data Extractions (Key-Values, Tables, Entities)
CREATE TABLE IF NOT EXISTS document_extractions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    document_id UUID NOT NULL REFERENCES documents(id) ON DELETE CASCADE,
    extraction_type VARCHAR(50) CHECK (extraction_type IN ('KEY_VALUE', 'ENTITIES', 'TABLES', 'METADATA', 'FINANCIAL', 'LEGAL_CLAUSES', 'CUSTOM')) NOT NULL,
    extracted_data JSONB NOT NULL,
    confidence_score NUMERIC(5, 4) DEFAULT 1.0,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 6. AI Summaries
CREATE TABLE IF NOT EXISTS document_summaries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    document_id UUID NOT NULL REFERENCES documents(id) ON DELETE CASCADE,
    summary_type VARCHAR(50) CHECK (summary_type IN ('EXECUTIVE', 'CONCISE', 'DETAILED', 'BULLET_POINTS', 'SECTION_BY_SECTION')) NOT NULL,
    summary_text TEXT NOT NULL,
    key_takeaways JSONB,
    ai_model VARCHAR(100) DEFAULT 'gemini-1.5-pro',
    prompt_tokens INT DEFAULT 0,
    completion_tokens INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 7. Document Chunks (for RAG & Vector Search readiness)
CREATE TABLE IF NOT EXISTS document_chunks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    document_id UUID NOT NULL REFERENCES documents(id) ON DELETE CASCADE,
    page_number INT,
    chunk_index INT NOT NULL,
    chunk_text TEXT NOT NULL,
    token_count INT,
    -- If using pgvector: embedding vector(768),
    embedding JSONB,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 8. Chat with PDF (Sessions & Messages)
CREATE TABLE IF NOT EXISTS chat_sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    document_id UUID NOT NULL REFERENCES documents(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS chat_messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id UUID NOT NULL REFERENCES chat_sessions(id) ON DELETE CASCADE,
    sender VARCHAR(20) CHECK (sender IN ('USER', 'AI', 'SYSTEM')) NOT NULL,
    message_text TEXT NOT NULL,
    sources_cited JSONB,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 9. Audit Logs & Privacy
CREATE TABLE IF NOT EXISTS audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    document_id UUID REFERENCES documents(id) ON DELETE SET NULL,
    action VARCHAR(100) NOT NULL,
    details JSONB,
    ip_address VARCHAR(45),
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Performance Indexes
CREATE INDEX IF NOT EXISTS idx_pg_documents_user ON documents(user_id);
CREATE INDEX IF NOT EXISTS idx_pg_documents_status ON documents(processing_status);
CREATE INDEX IF NOT EXISTS idx_pg_documents_hash ON documents(file_hash);
CREATE INDEX IF NOT EXISTS idx_pg_pages_doc ON document_pages(document_id);
CREATE INDEX IF NOT EXISTS idx_pg_extractions_doc ON document_extractions(document_id);
CREATE INDEX IF NOT EXISTS idx_pg_summaries_doc ON document_summaries(document_id);
CREATE INDEX IF NOT EXISTS idx_pg_chunks_doc ON document_chunks(document_id);
CREATE INDEX IF NOT EXISTS idx_pg_chat_messages_session ON chat_messages(session_id);
CREATE INDEX IF NOT EXISTS idx_pg_audit_created ON audit_logs(created_at);
CREATE INDEX IF NOT EXISTS idx_pg_extractions_gin ON document_extractions USING GIN (extracted_data);

