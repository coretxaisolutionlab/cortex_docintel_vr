
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      ...options.headers,
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));

    throw new Error(
      errorData.message || `API Error: ${response.status}`
    );
  }

  return response.json();
}

export async function uploadDocument(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  return apiRequest("/documents/upload", {
    method: "POST",
    body: formData,
  });
}

export async function getDocuments() {
  return apiRequest("/documents");
}

export async function summarizeDocument(documentId: string) {
  return apiRequest("/documents/summarize", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ documentId }),
  });
}

export async function chatWithDocument(
  documentId: string,
  question: string
) {
  return apiRequest("/documents/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ documentId, question }),
  });
}

export async function extractDocumentData(documentId: string) {
  return apiRequest("/documents/extract", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ documentId }),
  });
}

export async function compareDocuments(
  firstDocumentId: string,
  secondDocumentId: string
) {
  return apiRequest("/documents/compare", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstDocumentId,
      secondDocumentId,
    }),
  });
}
