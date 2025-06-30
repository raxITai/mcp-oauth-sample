import type { Metadata } from "next";
import "./globals.css";
import { auth } from "./auth";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "MCP OAuth Sample - raxIT AI",
  description: "A test sample MCP OAuth server implementation on Vercel",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
