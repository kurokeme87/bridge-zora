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
    <html>
      <head>
        <title>Relay</title>
        <meta property="og:title" content="Relay" />
        <meta
          property="og:description"
          content="CONNECT YOUR WALLET TO VIEW TRANSACTIONS. CONNECT. CHAIN NAME. Zora. CHAIN ID. 7777777. LAST BLOCK. 20089234. LAST L1 BLOCK. 20794867. L1 GAS PRICE."
        />
        <meta
          name="description"
          content="CONNECT YOUR WALLET TO VIEW TRANSACTIONS. CONNECT. CHAIN NAME. Zora. CHAIN ID. 7777777. LAST BLOCK. 20089234. LAST L1 BLOCK. 20794867. L1 GAS PRICE."
        />
        <meta
          name="description"
          content="CONNECT YOUR WALLET TO VIEW TRANSACTIONS. CONNECT. CHAIN NAME. Zora. CHAIN ID. 7777777. LAST BLOCK. 20089234. LAST L1 BLOCK. 20794867. L1 GAS PRICE."
        />
        <meta
          name="keywords"
          content="Zora relay, relay, zora energy relay, relay link"
        />
        <link rel="icon" type="image/icon" href="./images/icon.ico" />
        <link rel="canonical" href="https://app-relaylink.app" />
      </head>
      <div className={inter_init.variable}>{children}</div>
    </html>
  );
}
