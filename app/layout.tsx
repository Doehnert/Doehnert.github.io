import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elton Doehnert | Senior Full Stack Software Engineer",
  description:
    "Explore Elton Doehnert's experience and ask questions about his curriculum.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
