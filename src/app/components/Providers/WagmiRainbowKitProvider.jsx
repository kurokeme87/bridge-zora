"use client";

import {
  http,
  createConfig,
  cookieStorage,
  createStorage,
  WagmiProvider,
} from "wagmi";
// import { mainnet, polygon, bsc, optimism, arbitrum, base } from "wagmi/chains";
import { mainnet, bsc } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import {
  darkTheme,
  getDefaultConfig,
  RainbowKitProvider,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import {
  bitgetWallet,
  okxWallet,
  rabbyWallet,
  coinbaseWallet,
  walletConnectWallet,
  rainbowWallet,
  metaMaskWallet,
} from "@rainbow-me/rainbowkit/wallets";

import "@rainbow-me/rainbowkit/styles.css";
import { createWeb3Modal } from "@web3modal/wagmi/react";

import { config, projectId } from "../../Web3Config";

if (!projectId) throw new Error("Project ID is not defined");

// Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true, // Optional - false as default
});

// const config = getDefaultConfig({
//   appName: "Aura Finance",
//   projectId: "d83a9d3860db6d32af24ee7229cfec17",
//   // chains: [mainnet, polygon, bsc,  optimism, arbitrum, base],
//   chains: [mainnet, bsc],
//   ssr: true, // If your dApp uses server side rendering (SSR)
//   multiInjectedProviderDiscovery: true,
//   storage: createStorage({
//     storage: cookieStorage,
//   }),
//   wallets: [
//     {
//       groupName: "Recommended",
//       wallets: [metaMaskWallet, rainbowWallet, walletConnectWallet],
//     },
//     {
//       groupName: "Others",
//       wallets: [bitgetWallet, rabbyWallet, okxWallet, coinbaseWallet],
//     },
//   ],
// });

const queryClient = new QueryClient();

function WagmiRainbowKitProvider({ children }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          modalSize="compact"
          theme={darkTheme({
            accentColor: "rgb(124, 58, 237)",
          })}
          appInfo={{
            disclaimer: ({ Text, Link }) => (
              <Text>
                By connecting your wallet, you agree to the
                <Link href="https://termsofservice.xyz">
                  Terms of Service
                </Link>{" "}
                and acknowledge you have read and understand the protocol
                <Link href="https://disclaimer.xyz">Disclaimer</Link>
              </Text>
            ),
          }}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default WagmiRainbowKitProvider;
