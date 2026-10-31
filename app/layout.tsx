
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "DOCINTEL AI | Intelligent Document Assistant",
  description:
    "Upload, analyze, summarize and chat with your documents using DOCINTEL AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
