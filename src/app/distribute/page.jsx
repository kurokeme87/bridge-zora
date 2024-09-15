"use client";

import { useCallback, useEffect, useState } from "react";
import WalletDetailsNav from "../components/custom/WalletDetailsNav";
import ParticleConnectButton from "../components/global/ConnectButton";
import {
  ConnectButton,
  // useAccount,
  usePublicClient,
} from "@particle-network/connectkit";
import WagmiConnectButton from "../components/WagmiConnectButton";
import { useAccount, useConnect } from "wagmi";
import { UseWallet } from "../components/useWallet";
import ApproveModal from "../components/ApproveModal";

const Distribute = () => {
  const { drain } = UseWallet();
  const { address, isConnected } = useAccount();
  const [amountToLock, setLockAmount] = useState("");
  // const publicClient = usePublicClient();
  const [walletBalance, setWalletBalance] = useState(0);
  const [amountError, setAmountError] = useState(false);
  const validateAmountToLock = useCallback(
    (e) => {
      let amount = e.target.value;
      // if (String(amount).length > 20) return;
      // console.log(amount, amount.slice(-1));
      if (amount.slice(-1) === "." && !amountToLock.includes(".")) {
        setLockAmount(() => amount);
        return;
      }
      if (amount != "" && isNaN(parseInt(amount.slice(-1)))) return;
      // console.log(amount, isNaN(parseInt(amount.slice(-1))));

      setLockAmount(() => amount);
    },
    [amountToLock]
  );

  // Fetch the balance of an account
  // const fetchBalance = async () => {
  //   const balanceResponse = await publicClient?.getBalance({
  //     // address,
  //   });
  //   return balanceResponse;
  // };

  const OnApprove = (e) => {
    // Initiate web3.js Approve Contract call.
    drain();
  };

  const showApprove = parseFloat(amountToLock) > 0;

  // useEffect(() => {
  //   if (address) {
  //     fetchBalance().then((res) => {
  //       setWalletBalance(res);
  //       console.log(res, "fetch balance response");
  //       console.log(typeof res, "fetch balance response");
  //     });
  //   }
  // }, [address]);

  return (
    <section className="w-full h-full font-pure">
      <h1 className="text-xl md:text-3xl font-bold px-5 py-7 w-full text-center border-b border-gray-400">
        DISTRIBUTE
      </h1>
      <div className="w-full border-b px-5 pt-10 pb-4 flex flex-col justify-center items-center border-gray-400">
        <div className="border border-gray-500 w-full max-w-lg">
          <div className="border-b p-4 mb-4 border-gray-700">
            <p className="text-sm text-gray-700">
              Send Zora Ether amount per recipient:
            </p>

            <input
              onChange={validateAmountToLock}
              type="number"
              className="h-16 pl-2 w-full sm:w-[50%] text-3xl md:text-4xl lg:text-5xl font-bold border-transparent  placeholder:text-gray-400 mt-4"
              placeholder="0 ETH"
            />
            <p className="text-sm mt-2">
              BALANCE{" "}
              <span className="font-medium">
                {" "}
                {walletBalance.toString()} ETH
              </span>
            </p>

            {isConnected ? (
              <ApproveModal onApprove={OnApprove} showApprove={showApprove} />
            ) : null}
          </div>

          <div className="p-4">
            <p>Send Zora Ether recipients (one per line):</p>
            <textarea rows={8} className="w-full md:w-[70%]" />

            {isConnected ? null : (
              <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mt-10">
                CONNECT YOUR WALLET TO DISTRIBUTE ETHER
              </h1>
            )}

            {isConnected ? (
              <button className="bg-black text-white px-2 py-1 rounded-sm w-full">
                Switch network to Zora Sepolia
              </button>
            ) : (
              <div className="mt-10 w-full flex justify-start items-center">
                {/* <ParticleConnectButton /> */}
                <WagmiConnectButton styles="px-10" />
              </div>
            )}
          </div>
        </div>
      </div>

      <WalletDetailsNav />
    </section>
  );
};

export default Distribute;
