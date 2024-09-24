"use client";

import { useState } from "react";
import RelayNav from "../../components/global/navbar/RelayNav";
import { Inter } from "next/font/google";
import RelayMobileNav from "../../components/global/navbar/RelayMobileNav";

export const inter_init = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["100", "200", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.app-relaylink.app/bridge" />
        <title>Bridge - ZORA ENERGY</title>
        <meta
          name="description"
          content="CONNECT YOUR WALLET TO VIEW TRANSACTIONS. CONNECT. CHAIN NAME. Zora. CHAIN ID. 7777777. LAST BLOCK. 20089234. LAST L1 BLOCK. 20794867. L1 GAS PRICE."
        />
        <meta
          name="keywords"
          content="Zora relay bridge, relay bridge, zora energy relay bridge, relay bridge link"
        />
      </head>

      <div className={inter_init.variable}>
        <RelayNav bgColor="" transparentBg={true} setOpen={setOpen} />
        <RelayMobileNav open={open} setOpen={setOpen} />
        {children}
      </div>
    </html>
  );
}
