#!/usr/bin/env python3
"""
DocIntel Database Initializer & Verification Script
Cortex Intelligence and Technologies
"""

import os
import sqlite3
import sys

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DB_PATH = os.path.join(BASE_DIR, "docintel.db")
SCHEMA_SQL = os.path.join(BASE_DIR, "sql", "schema_sqlite.sql")
SEED_SQL = os.path.join(BASE_DIR, "sql", "seed_data.sql")


def init_database():
    print(f"[*] Initializing DocIntel Database at: {DB_PATH}")

    # Remove old database if needed
    if os.path.exists(DB_PATH):
        os.remove(DB_PATH)
        print("[-] Removed previous database instance.")

    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    # 1. Apply Schema
    print("[+] Applying schema...")
    with open(SCHEMA_SQL, "r", encoding="utf-8") as f:
        schema_script = f.read()
    cursor.executescript(schema_script)

    # 2. Apply Seed Data
    print("[+] Seeding initial data...")
    with open(SEED_SQL, "r", encoding="utf-8") as f:
        seed_script = f.read()
    cursor.executescript(seed_script)

    conn.commit()

    # 3. Verify counts
    tables = [
        "users",
        "categories",
        "documents",
        "document_pages",
        "document_extractions",
        "document_summaries",
        "chat_sessions",
        "chat_messages",
        "audit_logs",
    ]

    print("\n--- Database Verification Summary ---")
    for tbl in tables:
        cursor.execute(f"SELECT COUNT(*) FROM {tbl}")
        count = cursor.fetchone()[0]
        print(f" Table '{tbl}': {count} record(s)")

    print("\n[✓] DocIntel Database successfully initialized and verified!")
    conn.close()


if __name__ == "__main__":
    init_database()

