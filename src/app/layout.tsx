import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blessing Katsidzira | Portfolio",
  description:
    "A bold portfolio for Blessing Katsidzira, focused on product design, web development, and brand systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
