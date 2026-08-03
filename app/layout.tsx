import type { Metadata } from "next";

import "./globals.css";

const title = "SkyETA";
const description =
  "A browser-based flight-delay risk instrument with on-device analysis and an optional live AirLabs route board.";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    type: "website",
    title,
    description,
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
