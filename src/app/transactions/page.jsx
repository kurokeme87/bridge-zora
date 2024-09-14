"use client";

import { useEffect, useState } from "react";
import WalletDetailsNav from "../components/custom/WalletDetailsNav";
import ParticleConnectButton from "../components/global/ConnectButton";
import {
  ConnectButton,
  useAccount,
  usePublicClient,
} from "@particle-network/connectkit";
import Link from "next/link";
import { useSmartAccount } from "@particle-network/connectkit";
import { formatEther, parseEther } from "viem";

const Transactions = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [walletBalance, setWalletBalance] = useState(0);
  const { address, isConnected, chainId } = useAccount();
  const [amountError, setAmountError] = useState(false);
  const publicClient = usePublicClient();

  const smartAccount = useSmartAccount();
  const userOp = smartAccount?.buildUserOperation({
    tx: {
      to: address,
      value: "0x1", // 1wei
      data: "0x",
    },
  });
  const txHash = smartAccount?.sendUserOperation(userOp);
  console.log(txHash, "tex hash");

  // Fetch the balance of an account
  const fetchBalance = async () => {
    const balanceResponse = await publicClient?.getBalance({
      address,
    });
    const balanceInEther = formatEther(balanceResponse);
    console.log(balanceInEther, "balanceInEther");
    return balanceInEther;
  };

  useEffect(() => {
    if (address) {
      fetchBalance().then((res) => {
        setWalletBalance(res);
      });
    }
  }, [address]);

  return (
    <section className="w-full h-full font-pure">
      <h1 className="text-xl md:text-3xl font-bold px-5 py-7 w-full text-center border-b border-gray-400">
        TRANSACTIONS
      </h1>
      <div className="w-full border-b px-5 pt-10 pb-4 flex flex-col justify-center items-center border-gray-400">
        {isConnected ? (
          <div className="w-64 flex flex-col justify-start items-center">
            <div className="w-full flex justify-center items-center gap-4 font-medium text-sm">
              <button
                onClick={() => setActiveTab(1)}
                className={`${
                  activeTab === 1
                    ? "text-black border-black"
                    : "text-gray-500 hover:text-black border-transparent"
                } pb-3 border-b`}
              >
                DEPOSITS
              </button>
              <button
                onClick={() => setActiveTab(2)}
                className={`${
                  activeTab === 2
                    ? "text-black border-black"
                    : "text-gray-500 hover:text-black border-transparent"
                } pb-3 border-b`}
              >
                WITHDRAWS
              </button>
            </div>
            <p className="font-bold text-xl md:text-2xl lg:text-3xl pt-10">
              NO DEPOSITS
            </p>

            <Link
              href="https://testnet.bridge.zora.energy/"
              target="_blank"
              className="mx-auto"
            >
              <button className="p-2 bg-black text-white mt-10 mb-5 w-48">
                BRIDGE FUNDS
              </button>
            </Link>
          </div>
        ) : (
          <h1 className="text-xl md:text-3xl font-bold text-center  uppercase w-full max-w-2xl">
            CONNECT YOUR WALLET NOW to view your transaction
          </h1>
        )}

        {isConnected ? null : (
          <div className="mt-10">
            <ParticleConnectButton />
          </div>
        )}
      </div>

      <WalletDetailsNav />
    </section>
  );
};

export default Transactions;
