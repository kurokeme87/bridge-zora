"use client";

import React from "react";
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <React.StrictMode>
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
            theme={"dark"}
          >
            <Navbar />
            <MobileNavbar />
            {children}
          </ModalProvider>
        </body>
      </React.StrictMode>
    </html>
  );
}
