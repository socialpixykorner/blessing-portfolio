import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blessing Katsidzira | Portfolio",
  description: "Portfolio website for Blessing Katsidzira.",
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
