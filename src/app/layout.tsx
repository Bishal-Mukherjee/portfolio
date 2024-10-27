import type { Metadata } from "next";
import { raleway } from "./fonts";
import "./globals.css";
import Navbar from "@/components/modules/Navbar";

export const metadata: Metadata = {
  title: "Bishal Mukherjee",
  description: "Bishal Mukherjee's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${raleway.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
