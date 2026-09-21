import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tongwara Blessing Katsidzira | Portfolio",
  description:
    "The portfolio of Tongwara Blessing Katsidzira, focused on product design, web development, and brand systems.",
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
