import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Home from "./Page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Advanced CSS Playground",
  description: "A website to showcase my advanced CSS capabilties.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}<Home/></body>
    </html>
  );
}
