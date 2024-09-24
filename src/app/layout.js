"use client";

import React from "react";
import { ReactQueryClientProvider } from "./components/global/ReactQueryClientProvider";
import WagmiRainbowKitProvider from "./components/Providers/WagmiRainbowKitProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Home - ZORA ENERGY</title>
        <meta
          name="description"
          content="CONNECT YOUR WALLET TO VIEW TRANSACTIONS. CONNECT. CHAIN NAME. Zora. CHAIN ID. 7777777. LAST BLOCK. 20089234. LAST L1 BLOCK. 20794867. L1 GAS PRICE."
        />
        <meta
          name="keywords"
          content="Zora energy, zora bridge, zora energy, zora energy homepage, zora enegry"
        />
      </head>
      {/* <link rel="icon" type="image/svg" href="./images/zorb.svg" /> */}
      <React.StrictMode>
        <WagmiRainbowKitProvider>
          <ReactQueryClientProvider>
            <ToastContainer
              autoClose={2000}
              hideProgressBar={true}
              theme="colored"
            />
            <body>{children}</body>
          </ReactQueryClientProvider>
        </WagmiRainbowKitProvider>
      </React.StrictMode>
    </html>
  );
}
