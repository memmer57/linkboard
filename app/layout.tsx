import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "@/styles/global.css";
import "@/styles/normalize.css";
import "@/styles/variables.css";

export const metadata: Metadata = {
  title: "Memmer's LinkBoard",
  description: "A link board, like a bulletin board, but for links.",
  keywords: [
    "Matěj",
    "Memmer",
    "Emmer",
    "link",
    "board",
    "linkboard",
    "bulletin",
    "bulletin",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
