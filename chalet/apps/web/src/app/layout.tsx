import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../index.css";
import Providers from "@/components/providers";
import Header from "@/components/header";
import { Sidebar } from "@/components/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Proxmox Manager - chalet",
  description: "Modern Proxmox PVE Management Interface",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="drawer lg:drawer-open">
            <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
              <Header />
              <main className="flex-1 p-4 bg-base-100">{children}</main>
            </div>
            <div className="drawer-side">
              <label htmlFor="drawer-toggle" className="drawer-overlay"></label>
              <aside className="w-64 min-h-full">
                <Sidebar />
              </aside>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
