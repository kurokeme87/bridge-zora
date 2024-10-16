"use client";

import { useAccount } from "wagmi";
import { shortenAddressSmall } from "../utils";
import { useEffect, useState } from "react";
import { BsChevronDown, BsExclamationTriangle } from "react-icons/bs";
import Web3 from "web3";
import { formatCurrency } from "@/app/lib";
import { ConnectButton } from "@rainbow-me/rainbowkit";

// Supported networks with their chain IDs and names
const supportedNetworks = {
  1: "ETH",       // Ethereum Mainnet
  56: "BSC",      // Binance Smart Chain
  137: "Polygon", // Polygon
  43114: "AVAX",  // Avalanche
  42161: "Arbitrum", // Arbitrum
  10: "Optimism", // Optimism
  42220: "Celo",  // Celo
};

const ConnectedAccountButton = () => {
  const [open, setOpen] = useState(false);
  const { address, connector } = useAccount();
  const [walletBalance, setWalletBalance] = useState(0);

  useEffect(() => {
    if (address) {
      // Initialize web3 instance (assuming you have the Web3 provider set up)
      const web3 = new Web3(Web3.givenProvider);

      // Fetch balance of connected address
      web3.eth.getBalance(address).then((balance) => {
        const etherBalance = web3.utils.fromWei(balance, "ether");
        setWalletBalance(parseFloat(etherBalance)); // Convert to number

        // Log the address, wallet name, and balance
        console.log("User Address:", address);
        console.log("Wallet Name:", connector?.name || "Unknown Wallet");
        console.log("Wallet Balance:", etherBalance, "ETH");
      });
    }
  }, [address, connector]);

  return (
    <ConnectButton.Custom>
      {({ chain, openChainModal }) => {
        const isSupported = chain?.id && supportedNetworks[chain.id]; // Check if the current chain is supported

        return (
          <div className="relative">
            {address && isSupported ? (
              <button
                className="flex justify-between items-center gap-2 text-sm font-medium bg-white rounded-3xl p-1.5"
                onClick={() => setOpen(!open)}
              >
                <svg
                  className="rounded-full md:w-6 md:h-6"
                  x="0"
                  y="0"
                  width="32"
                  height="32"
                >
                  <rect
                    x="0"
                    y="0"
                    width="32"
                    height="32"
                    transform="translate(-0.38821466860426457 9.426418997094338) rotate(134.3 16 16)"
                    fill="#235CE1"
                  ></rect>
                  <rect
                    x="0"
                    y="0"
                    width="32"
                    height="32"
                    transform="translate(12.703956961190665 11.953773732172792) rotate(82.7 16 16)"
                    fill="#034C5E"
                  ></rect>
                  <rect
                    x="0"
                    y="0"
                    width="32"
                    height="32"
                    transform="translate(29.164830618298193 -10.63348221278552) rotate(506.0 16 16)"
                    fill="#FA8100"
                  ></rect>
                </svg>
                <p className="lg:block hidden">
                  {/* Display network name and shortened address */}
                  {supportedNetworks[chain.id]}: {shortenAddressSmall(address)}
                </p>
                <p className="lg:block hidden ml-2">
                  {/* Display wallet balance */}
                  {walletBalance.toFixed(5)} {supportedNetworks[chain.id]}
                </p>
                <BsChevronDown
                  className={`${
                    open ? "rotate-180" : ""
                  } ease transition-all lg:block hidden`}
                />
              </button>
            ) : (
              <button
                className="flex justify-between items-center gap-2 text-sm font-medium bg-yellow-200 text-red-600 rounded-3xl p-1.5"
                onClick={openChainModal} // Open the chain switch modal
              >
                <BsExclamationTriangle className="text-xl" />
                <p>Unsupported Network</p>
                <BsChevronDown
                  className={`${
                    open ? "rotate-180" : ""
                  } ease transition-all`}
                />
              </button>
            )}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default ConnectedAccountButton;
