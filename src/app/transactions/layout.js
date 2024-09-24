"use client";

import { useState } from "react";
import Navbar from "../components/global/Navbar";
import MobileNavbar from "../components/global/navbar/MobileNavbar";

export default function RootLayout({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <html>
      <head>
        <title>transactions - ZORA ENERGY</title>
        <link rel="canonical" href="https://www.zorabridge.com/transactions" />
        <meta property="og:title" content="Transactions - ZORA ENERGY" />
        <meta
          property="og:description"
          content="CONNECT YOUR WALLET TO VIEW TRANSACTIONS. CONNECT. CHAIN NAME. Zora. CHAIN ID. 7777777. LAST BLOCK. 20089234. LAST L1 BLOCK. 20794867. L1 GAS PRICE."
        />
        <meta
          name="description"
          content="CONNECT YOUR WALLET TO VIEW TRANSACTIONS. CONNECT. CHAIN NAME. Zora. CHAIN ID. 7777777. LAST BLOCK. 20089234. LAST L1 BLOCK. 20794867. L1 GAS PRICE."
        />
        <meta
          name="keywords"
          content="Zora transactions, zora bridge, zora energy, zora energy transactions"
        />
      </head>
      <Navbar setOpen={setOpen} />
      <MobileNavbar setOpen={setOpen} open={open} />
      {children}
    </html>
  );
}
