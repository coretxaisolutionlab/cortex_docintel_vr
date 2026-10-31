
"use client";

import { useState } from "react";
import Sidebar from "../../components/Sidebar";

interface Message {
  role: "user" | "ai";
  text: string;
}

export default function ChatPage() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [documentName, setDocumentName] = useState("No document selected");

  const sendMessage = () => {
    if (!question.trim()) return;

    const userMessage = question;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: userMessage },
    ]);

    setQuestion("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "Your question has been received. Connect the DOCINTEL AI backend to get answers based on your uploaded document.",
        },
      ]);
    }, 600);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="hidden w-64 shrink-0 md:block">
        <Sidebar />
      </div>

      <main className="flex min-w-0 flex-1 flex-col p-5 md:p-8">
        <div className="mb-6">
          <p className="text-sm font-medium text-purple-600">
            AI WORKSPACE / CHAT
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            Chat with your PDF
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Ask questions and explore information from your documents.
          </p>
        </div>

        <div className="mb-5 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-2xl">
              📄
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">
                Selected Document
              </p>
              <p className="text-xs text-gray-500">{documentName}</p>
            </div>
          </div>

          <label className="cursor-pointer rounded-xl border border-purple-200 px-4 py-2 text-sm font-semibold text-purple-700 hover:bg-purple-50">
            Choose PDF
            <input
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={(e) =>
                setDocumentName(
                  e.target.files?.[0]?.name || "No document selected"
                )
              }
            />
          </label>
        </div>

        <div className="flex min-h-[450px] flex-1 flex-col rounded-2xl border border-gray-200 bg-white">
          <div className="flex items-center gap-3 border-b border-gray-100 p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-xl">
              ✨
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">
                DOCINTEL AI Assistant
              </h2>
              <p className="text-xs text-green-600">Frontend Demo</p>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-5">
            {messages.length === 0 ? (
              <div className="m-auto max-w-md text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-50 text-3xl">
                  💬
                </div>
                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  What would you like to know?
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Select a document and ask your questions here.
                </p>
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {["Summarize this document", "What are the key points?", "Explain this document"].map((item) => (
                    <button
                      key={item}
                      onClick={() => setQuestion(item)}
                      className="rounded-full border border-gray-200 px-3 py-2 text-xs text-gray-600 hover:border-purple-300 hover:bg-purple-50"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                      message.role === "user"
                        ? "bg-purple-600 text-white"
                        : "border border-gray-200 bg-gray-50 text-gray-700"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="border-t border-gray-100 p-4">
            <div className="flex items-center gap-3 rounded-xl border border-gray-200 p-2 focus-within:border-purple-400">
              <input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendMessage();
                }}
                placeholder="Ask anything about your document..."
                className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm outline-none"
              />
              <button
                onClick={sendMessage}
                className="rounded-lg bg-purple-600 px-5 py-3 text-sm font-semibold text-white hover:bg-purple-700"
              >
                Send ↑
              </button>
            </div>
            <p className="mt-2 text-center text-xs text-gray-400">
              AI responses will work after backend integration.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
