-- Seed Data for DocIntel
-- Cortex Intelligence and Technologies

-- 1. Insert Team Users
INSERT INTO users (id, full_name, email, password_hash, role, organization) VALUES
('usr-001', 'Heli Patel', 'heli.patel@cortexintelligence.tech', '$2b$12$e8YkZ8u7L1W8m.hashed_secret_admin', 'Admin', 'Cortex Intelligence and Technologies'),
('usr-002', 'Saud Rana', 'saud.rana@cortexintelligence.tech', '$2b$12$e8YkZ8u7L1W8m.hashed_secret_op1', 'Project Operator', 'Cortex Intelligence and Technologies'),
('usr-003', 'Rutvi Patel', 'rutvi.patel@cortexintelligence.tech', '$2b$12$e8YkZ8u7L1W8m.hashed_secret_op2', 'Project Operator', 'Cortex Intelligence and Technologies');

-- 2. Insert Standard Categories & Use Cases
INSERT INTO categories (id, name, industry, description) VALUES
('cat-001', 'Academic & Research Papers', 'Education', 'Research papers, lecture notes, academic journals and scholarly PDFs'),
('cat-002', 'Medical Documentation', 'Healthcare', 'Clinical reports, discharge summaries, patient case studies, and medical documentation'),
('cat-003', 'Contracts & Legal Agreements', 'Legal', 'Commercial contracts, NDAs, terms of service, regulatory compliance and legal briefs'),
('cat-004', 'Corporate Reports & SOPs', 'Corporate', 'Business presentations, annual reports, standard operating procedures and meeting memos'),
('cat-005', 'Financial Statements & Audits', 'Finance', 'Balance sheets, earnings releases, tax filings, audit reports and investor presentations'),
('cat-006', 'Scientific & Technical Specs', 'Research', 'Engineering blueprints, API specifications, whitepapers and technical documentation');

-- 3. Insert Demo Processed Document
INSERT INTO documents (
    id, user_id, category_id, title, original_filename,
    storage_path, file_size_bytes, file_hash, mime_type,
    page_count, processing_status, created_at, processed_at
) VALUES (
    'doc-001',
    'usr-002',
    'cat-006',
    'DocIntel Architecture & Technical Whitepaper',
    'docintel_architecture_v1.pdf',
    '/storage/documents/docintel_architecture_v1.pdf',
    2048576,
    'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    'application/pdf',
    5,
    'COMPLETED',
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
);

-- 4. Insert Extracted Pages
INSERT INTO document_pages (id, document_id, page_number, raw_text, word_count) VALUES
('page-001', 'doc-001', 1, 'DocIntel is an AI-powered document intelligence platform designed to simplify how users interact with PDF documents. Developed by Cortex Intelligence and Technologies.', 23),
('page-002', 'doc-001', 2, 'Key Features include PDF Processing, Data Extraction, AI-Powered Summarization, Document Understanding, and Privacy-Focused Architecture.', 16);

-- 5. Insert Data Extractions
INSERT INTO document_extractions (id, document_id, extraction_type, extracted_data, confidence_score) VALUES
('ext-001', 'doc-001', 'METADATA', '{"title": "DocIntel Technical Overview", "author": "Cortex Intelligence and Technologies", "version": "1.0", "license": "Copyright 2026 Cortex Intelligence and Technologies"}', 0.99),
('ext-002', 'doc-001', 'KEY_VALUE', '{"Head of Project": "Heli Patel", "Project Operators": ["Saud Rana", "Rutvi Patel"], "Status": "Working Demo Ready", "Target Industries": ["Education", "Healthcare", "Legal", "Corporate", "Finance", "Research"]}', 0.98);

-- 6. Insert AI Summaries
INSERT INTO document_summaries (id, document_id, summary_type, summary_text, key_takeaways, ai_model, prompt_tokens, completion_tokens) VALUES
('sum-001', 'doc-001', 'EXECUTIVE',
'DocIntel transforms traditional PDF reading into an intelligent automated experience by combining PDF text extraction, structured entity retrieval, and AI-driven summarization for enterprise, legal, and academic domains.',
'["Automates PDF information extraction", "Generates concise and readable summaries", "Reduces manual document review time significantly", "Enterprise and privacy-focused architecture"]',
'gemini-1.5-pro',
1250,
185);

-- 7. Insert Audit Log
INSERT INTO audit_logs (id, user_id, document_id, action, details, ip_address) VALUES
('log-001', 'usr-002', 'doc-001', 'DOCUMENT_UPLOAD', '{"filename": "docintel_architecture_v1.pdf", "size_kb": 2048}', '127.0.0.1'),
('log-002', 'usr-002', 'doc-001', 'PIPELINE_COMPLETE', '{"duration_ms": 3200, "status": "COMPLETED"}', '127.0.0.1');

