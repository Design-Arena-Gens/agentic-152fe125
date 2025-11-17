import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Playwright + WebView2 Learning Roadmap",
  description:
    "Structured 10-day learning plan for automating Microsoft Word add-ins with Playwright (Python) and WebView2."
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
