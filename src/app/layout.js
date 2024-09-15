"use client";

import React, { useState } from "react";
import Navbar from "./components/global/Navbar";
import "./globals.css";

import MobileNavbar from "./components/global/navbar/MobileNavbar";
import { ReactQueryClientProvider } from "./components/global/ReactQueryClientProvider";
import WagmiRainbowKitProvider from "./components/Providers/WagmiRainbowKitProvider";

export default function RootLayout({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <html lang="en">
      <link rel="icon" type="image/svg" href="./images/zorb.svg" />
      <React.StrictMode>
        <WagmiRainbowKitProvider>
          <ReactQueryClientProvider>
            <body>
              <Navbar setOpen={setOpen} />
              <MobileNavbar setOpen={setOpen} open={open} />
              {children}
            </body>
          </ReactQueryClientProvider>
        </WagmiRainbowKitProvider>
      </React.StrictMode>
    </html>
  );
}
