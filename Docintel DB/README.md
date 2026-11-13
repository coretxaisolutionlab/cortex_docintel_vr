# 📄 DocIntel – Database System & Architecture
### Intelligent Document Processing & Analysis  
**AI-Powered PDF Data Extraction, Summarization & Document Intelligence**  
*Developed by **Cortex Intelligence and Technologies***

---

## 🚀 Overview

**DocIntel** is an AI-powered document intelligence platform designed to simplify how users interact with PDF documents. It extracts meaningful information, generates summaries, and helps users understand large and complex documents efficiently.

This repository contains the **complete production-ready Database Architecture & Schema** for DocIntel, engineered to support both **SQLite** (local development and demo execution) and **PostgreSQL** (production deployment with JSONB & pgvector capability for RAG).

---

## 👥 Project Team & Leadership

* **Organization:** Cortex Intelligence and Technologies
* **Head of Project:** Heli Patel
* **Project Operators:** Saud Rana & Rutvi Patel
* **Product:** DocIntel
* **Category:** AI / Document Intelligence
* **Status:** Working Demo Ready

---

## 🏗️ Database Architecture & Entities

The database is structured to support the full pipeline of document processing, extraction, AI summarization, and interactive chat:

1. **`users`**: User management with role-based access control (Admin, Project Operator, Analyst, Viewer).
2. **`categories`**: Industry use cases (Education, Healthcare, Legal, Corporate, Finance, Research).
3. **`documents`**: PDF files, storage locations, cryptographic checksums (`file_hash`), and processing states.
4. **`document_pages`**: Extracted raw text per page with word counters.
5. **`document_extractions`**: Structured extracted data (Key-Value pairs, Tables, Entities, Metadata) in JSON/JSONB format.
6. **`document_summaries`**: AI-generated summaries (Executive, Concise, Detailed, Bullet Points) with token metrics.
7. **`document_chunks`**: Text chunking with vector embedding support for RAG (Retrieval-Augmented Generation) & Semantic Search.
8. **`chat_sessions` & `chat_messages`**: "Chat with PDF" interactive conversation histories with source citations.
9. **`audit_logs`**: Security & privacy audit trail tracking every document interaction.

---

## 📁 Repository Structure

```text
Docintel DB/
├── README.md                      # Project and database documentation
├── .gitignore                     # Git ignore rules
├── docintel.db                    # Ready-to-use pre-seeded SQLite database
├── sql/
│   ├── schema_sqlite.sql          # Complete SQLite schema
│   ├── schema_postgres.sql        # Enterprise PostgreSQL schema (with JSONB & pgvector)
│   └── seed_data.sql              # Initial seed data (Team, Categories, Demo Document)
├── scripts/
│   └── init_db.py                 # Automated DB initialization and test script
├── python_models/
│   ├── __init__.py
│   ├── database.py                # Database connection and session manager
│   └── models.py                  # SQLAlchemy ORM models ready for FastAPI/Flask
└── docs/
    └── DATABASE_DESIGN.md         # Detailed Data Dictionary & Mermaid ER Diagram
```

---

## ⚡ Quick Start

### 1. Initialize or Re-seed the Database
Run the included Python initialization script to generate a fresh SQLite database and verify all tables:
```bash
python3 scripts/init_db.py
```

### 2. Inspect with SQLite CLI
```bash
sqlite3 docintel.db
```
Useful commands inside `sqlite3`:
```sql
.tables
SELECT * FROM users;
SELECT name, industry FROM categories;
SELECT title, processing_status FROM documents;
SELECT summary_type, summary_text FROM document_summaries;
.quit
```

### 3. Deploying to PostgreSQL
To set up on PostgreSQL:
```bash
createdb docintel
psql -d docintel -f sql/schema_postgres.sql
psql -d docintel -f sql/seed_data.sql
```

---

## 📤 How to Push to GitHub / Remote Repository

Follow these steps to push this project to your GitHub repository:

1. **Check Git Status & Commit:**
   ```bash
   git status
   ```

2. **Add Your Remote Repository:**
   *(Create a new empty repository on GitHub first, then copy its URL)*
   ```bash
   git remote add origin https://github.com/<your-username>/docintel-db.git
   ```

3. **Rename branch to `main` and push:**
   ```bash
   git branch -M main
   git push -u origin main
   ```

---

## 📜 License
Copyright © 2026 **Cortex Intelligence and Technologies**.  
All rights reserved.

