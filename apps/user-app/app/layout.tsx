import "./globals.css";
import * as React from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../provider";
import { AppbarClient } from "../components/AppbarClient";
import { Client } from "appwrite";

const inter = Inter({ subsets: ["latin"] });

const client = new Client();
client.setProject('672119f7002e6aa196a5');

export const metadata: Metadata = {
  title: "CampusVoices",
  description: "whats going on in campus",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <div className="min-w-screen min-h-screen bg-[#ebe6e6]">
            {/* <AppbarClient /> */}
            {children}
          </div>
        </body>
      </Providers>
    </html>
  );
}
