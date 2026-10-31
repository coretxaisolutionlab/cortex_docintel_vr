
"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Login UI ready. Backend authentication is not connected yet.");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#fafafa] px-5 py-12">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <Link href="/" className="text-xl font-bold text-gray-900">
          DOCINTEL <span className="text-purple-600">AI</span>
        </Link>

        <h1 className="mt-9 text-3xl font-bold text-gray-900">
          Welcome back
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Sign in to continue to your workspace.
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-purple-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-purple-600 py-3 font-semibold text-white transition hover:bg-purple-700"
          >
            Sign In
          </button>
        </form>

        <p className="mt-7 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link href="/signup" className="font-semibold text-purple-600">
            Create Account
          </Link>
        </p>

        <Link
          href="/"
          className="mt-6 block text-center text-sm text-gray-500 hover:text-purple-600"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
