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
