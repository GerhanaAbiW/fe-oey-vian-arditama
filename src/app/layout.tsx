// src/app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar"; // pastikan alias @ sudah di tsconfig.json
import { DEFAULT_NAVBAR } from "@/components/navbar/constant";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* panggil Navbar pakai constant */}
        <Navbar {...DEFAULT_NAVBAR} />
        {children}
      </body>
    </html>
  );
}
