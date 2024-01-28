"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

import { ThemeProvider } from "@material-tailwind/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <html lang="en">
      <SessionProvider session={session}>
        <ThemeProvider>
          <body className={inter.className}>{children}</body>
        </ThemeProvider>
      </SessionProvider>
    </html>
  );
}
