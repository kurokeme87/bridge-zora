"use client";

import { useAccount } from "wagmi";
import { shortenAddressSmall } from "../utils";
import { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import Web3 from "web3";
import { formatCurrency } from "@/app/lib";

const ConnectedAccountButton = () => {
  const [open, setOpen] = useState(false);
  const { address } = useAccount();
  const [walletBalance, setWalletBalance] = useState(0);

  const getBalance = async () => {
    try {
      // Check if window.ethereum is available
      if (typeof window.ethereum === "undefined") {
        console.log("Ethereum provider is not available");
        return;
      }

      // Initialize Web3 instance
      const web3 = new Web3(window.ethereum);

      // Request accounts
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (!accounts || accounts.length === 0) {
        console.log(
          "No accounts found. Make sure the user is logged into their wallet."
        );
        return;
      }

      // Get balance in wei
      const weiBalance = await web3.eth.getBalance(accounts[0]);

      if (weiBalance === undefined) {
        console.error("Failed to fetch balance for the account:", accounts[0]);
        return;
      }

      // Convert to Ether
      const ethBalance = web3.utils.fromWei(weiBalance, "ether"); // Specify 'ether' as the unit
      // console.log("ETH Balance:", ethBalance);

      // Set the wallet balance state
      setWalletBalance(ethBalance);
    } catch (err) {
      console.log("Error fetching balance:", err);
    }
  };

  useEffect(() => {
    getBalance();
  }, []);

  return (
    <div className="relative">
      <button
        className="flex justify-between items-center gap-2 text-xs font-medium"
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
        <p className="lg:block hidden">{shortenAddressSmall(address)}</p>
        <p className="lg:block hidden ml-2">
          {formatCurrency(walletBalance || 0)}
        </p>
        <BsChevronDown
          className={`${
            open ? "rotate-180" : ""
          } ease transition-all lg:block hidden`}
        />
      </button>
    </div>
  );
};

export default ConnectedAccountButton;
