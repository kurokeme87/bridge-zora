"use client";

import { Inter } from "next/font/google";

export const inter_init = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["100", "200", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" type="image/icon" href="./icon.ico" />
      <link rel="canonical" href="https://super-bridge.net" />
      <div className={inter_init.variable}>{children}</div>
    </html>
  );
}
