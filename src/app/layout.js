"use client";

import React, { useState } from "react";
import Navbar from "./components/global/Navbar";
import "./globals.css";

import { WalletEntryPosition } from "@particle-network/auth";
import { evmWallets } from "@particle-network/connect";
import {
  BNBChain,
  BNBChainTestnet,
  Ethereum,
  EthereumSepolia,
} from "@particle-network/chains";
import { ModalProvider } from "@particle-network/connect-react-ui";
import MobileNavbar from "./components/global/navbar/MobileNavbar";
import { ReactQueryClientProvider } from "./components/global/ReactQueryClientProvider";

export default function RootLayout({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <html lang="en">
      <link rel="icon" type="image/svg" href="./images/zorb.svg" />
      <React.StrictMode>
        <ReactQueryClientProvider>
          <body
          // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <ModalProvider
              walletSort={["Particle Auth", "Wallet"]}
              particleAuthSort={["discord"]}
              options={{
                projectId: process.env.PROJECT_ID,
                clientKey: process.env.APP_CLIENT_KEY,
                appId: process.env.APP_ID,
                chains: [Ethereum, EthereumSepolia, BNBChain, BNBChainTestnet],
                particleWalletEntry: {
                  displayWalletEntry: true,
                  defaultWalletEntryPosition: WalletEntryPosition.BR,
                },
                wallets: [
                  ...evmWallets({
                    projectId: process.env.APP_WALLETCONNECT_PROJECT_ID,
                    showQrModal: false,
                  }),
                ],
              }}
              language="en"
              theme={"light"}
            >
              <Navbar setOpen={setOpen} />
              <MobileNavbar setOpen={setOpen} open={open} />
              {children}
            </ModalProvider>
          </body>
        </ReactQueryClientProvider>
      </React.StrictMode>
    </html>
  );
}
