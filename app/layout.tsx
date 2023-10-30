import { ClerkProvider } from "@clerk/nextjs";
import {Inter, Space_Grotesk} from "next/font/google"
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FlowDev",
  description: "A web site that's there to create the help needed for you all",
  icons: {
    icon:"/assets/images/site-logo.svg"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
