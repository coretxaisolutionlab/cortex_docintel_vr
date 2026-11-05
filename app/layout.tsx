
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "DOCINTEL AI | Document Intelligence",
  description:
    "Understand, analyze and manage your documents with DOCINTEL AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#f8f3e9] text-[#38291f] antialiased">
        <Navbar />

        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
