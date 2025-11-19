// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ahmed Ali | Portfolio",
  description: "Full-Stack Developer Portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: {

  
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <nav className="flex justify-center gap-6 p-4 bg-gray-900 text-white">
          <Link href="/">Home</Link>
          <Link href="/project">Projects</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}
