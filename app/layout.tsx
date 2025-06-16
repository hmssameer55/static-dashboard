import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import LeftSidebar from "@/components/left-sidebar";
import RightSidebar from "@/components/right-sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CUET Science Dashboard",
  description: "Educational dashboard for CUET Science preparation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-black text-white h-screen overflow-hidden`}
      >
        <div className="flex h-screen">
          {/* Left Sidebar */}
          <div className="sticky top-0 h-full overflow-y-auto z-30">
            <LeftSidebar />
          </div>

          <div className="flex flex-col flex-1 h-full">
            <Header />

            <div className="flex flex-1 overflow-hidden">
              <main className="flex-1 overflow-y-auto">{children}</main>
              <div className="sticky top-16 h-[calc(100vh-64px)] overflow-y-auto">
                <RightSidebar />
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
