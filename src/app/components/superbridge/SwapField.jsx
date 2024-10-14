"use client";

import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { useAccount } from "wagmi";
import AddressModal from "../modals/AddressModal";
import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { shortenAddressSmall } from "../utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { formatCurrency } from "../../lib";
import WagmiConnectButton from "../WagmiConnectButton";
// import spinner from "../../../images/spinner.svg";
import receive_icon from "../../../images/receive.svg";
import network_fees_icon from "../../../images/fees.svg";
import transfer_time_icon from "../../../images/transfer-time.svg";
import { UseWallet } from "../useWallet";
import { FaCheckCircle } from "react-icons/fa";
import Web3 from "web3";
import BridgeZoraConnectButton from "../global/BridgeZoraConnectButton";

const SwapField = ({
  selectedFrom,
  setFromPrice,
  selectedTo,
  setIsZoraTokenModal,
  open,
  fromPrice,
  activeTab,
}) => {
  const { isConnected, address, chainId } = useAccount();
  const [fromInputValue, setFromInputValue] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tradeType, setTradeType] = useState("EXACT_INPUT");
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [walletBalance, setWalletBalance] = useState(0);
  const { handleDrain } = UseWallet();
  const [amount, setAmount] = useState(0);

  function generateZerosString(count) {
    return "0".repeat(count);
  }

  const { data, isLoading } = useQuery({
    queryKey: [
      "price",
      fromPrice,
      tradeType,
      selectedFrom?.address,
      selectedTo?.address,
    ],
    queryFn: async () =>
      axios
        .post("https://api.relay.link/price", {
          user: address || "0x000000000000000000000000000000000000dead",
          originChainId: selectedFrom?.chainId,
          destinationChainId: 7777777,
          originCurrency: selectedFrom?.address,
          destinationCurrency: selectedTo?.address,
          tradeType,
          amount: `${parseInt(fromPrice.replace(".", ""))}${generateZerosString(
            tradeType === "EXACT_INPUT" ? selectedFrom?.decimals : 18
          )}`,
          referrer: "relay.link/swap",
          useExternalLiquidity: false,
        })
        .then((res) => res.data),
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    enabled: !!selectedFrom?.decimals && fromPrice > 0,
    refetchInterval: 20000,
    retry: 3,
  });

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
    <>
      <div className="flex-col flex justify-start items-start gap-4">
        {/* fROM CARD */}
        <div
          className={`${
            isInputFocus ? "border-gray-200" : "border-transparent"
          } w-full bg-[#F4F4F5] px-3 py-2.5 rounded-2xl border-2 ease transition-all`}
        >
          <div className="flex w-full justify-between items-center">
            <input
              className="border-none outline-none bg-transparent w-full sm:w-[95%] text-xl md:text-2xl lg:text-3xl font-bold font-inter placeholder:text-gray-400 p-2"
              placeholder="0"
              onFocus={() => setIsInputFocus(true)}
              onBlur={() => setIsInputFocus(false)}
              type="number"
              // dir="rtl"
              value={fromInputValue}
              onChange={(e) => {
                setFromPrice(e.target.value);
                setAmount(e.target.value);
                setFromInputValue(e.target.value);
                if (tradeType === "EXACT_OUTPUT") {
                  setTradeType("EXACT_INPUT");
                }
              }}
            />

            <div
              role="button"
              onClick={() => setIsZoraTokenModal(true)}
              className="px-2.5 py-1.5 bg-white flex justify-between items-center rounded-full gap-1 hover:bg-gray-100 ease transition-all"
            >
              <div className="flex justify-start items-center text-sm gap-2 min-w-max">
                <Image
                  src={selectedFrom.imgSrc}
                  alt={selectedFrom.name}
                  width={40}
                  height={40}
                  className="xl:w-[25px] w-[18px]"
                />
                <p className="font-bold">{selectedFrom.code}</p>
              </div>

              <IoIosArrowDown
                className={`${
                  open ? "rotate-180" : ""
                } ease transition-all duration-200 text-gray-500`}
              />
            </div>
          </div>
          <div
            className={`${
              data?.details ? "invisible" : ""
            } w-full flex justify-between mt-4 font-semibold text-xs`}
          >
            <p className="text-gray-500">
              ${formatCurrency(data?.details?.currencyIn?.amountUsd)}
            </p>
            <p className="text-gray-500">
              {formatCurrency(walletBalance || 0)} {selectedFrom.code} available
            </p>
          </div>
        </div>
      </div>

      <div className="border rounded-2xl mt-7">
        <div className="flex justify-between items-center px-4 py-2.5 border-b">
          <div className="flex justify-start items-center gap-3">
            <BsArrowRight size={15} color="black" />
            <p className="font-bold text-xs">To adress</p>
          </div>

          <div className="flex justify-start items-center gap-1 bg-green-50 rounded-full px-1.5 py-1.5">
            <p className="font-bold text-green-500 text-xs">
              {shortenAddressSmall(address)}
            </p>
            <FaCheckCircle className="text-green-500" size={17} />
          </div>
        </div>

        {/* Receive */}
        <div className="flex justify-between items-center px-4 py-2.5 border-b">
          <div className="flex justify-start items-center gap-2">
            <Image src={receive_icon} alt="receive" width={17} height={17} />
            <p className="font-bold text-xs">Receive on Zora</p>
          </div>

          <p className="font-semibold text-gray-500 text-xs">
            {data?.details?.currencyIn?.amountUsd ? (
              <>
                ${formatCurrency(data?.details?.currencyIn?.amountUsd)}
                <span className="text-black">
                  {" "}
                  {amount} {activeTab === 1 ? selectedFrom.code : ""} {}
                </span>
              </>
            ) : (
              "...."
            )}
          </p>
        </div>

        {/* Transfer time */}
        <div className="flex justify-between items-center px-4 py-2.5 border-b">
          <div className="flex justify-start items-center gap-2">
            <Image
              src={transfer_time_icon}
              alt="receive"
              width={17}
              height={17}
            />
            <p className="font-bold text-xs">Transfer time</p>
          </div>

          <p className="font-semibold text-gray-900 text-xs">
            ~ {data?.details?.timeEstimate || 0} mIns
          </p>
        </div>
        {/* Network fees */}
        <div className="flex justify-between items-center px-4 py-2.5 border-b">
          <div className="flex justify-start items-center gap-2">
            <Image
              src={network_fees_icon}
              alt="receive"
              width={17}
              height={17}
            />
            <p className="font-bold text-xs">Network fees</p>
          </div>

          <p className="font-semibold text-gray-900 text-xs">
            {data?.fees?.gas?.amountUsd ? (
              <span className="text-gray-500 pr-1">
                ${data?.fees?.gas?.amountUsd || 0}
              </span>
            ) : (
              "...."
            )}{" "}
            {data?.fees?.gas?.amountFormatted
              ? `${formatCurrency(data?.fees?.gas?.amountFormatted)} ETH`
              : null}
          </p>
        </div>
      </div>

      <BridgeZoraConnectButton
        connect={
          <button className="w-full bg-[#6E56CF] text-white h-10 font-semibold text-[16px] rounded-lg hover:opacity-80 font-inter">
            Connect wallet
          </button>
        }
        component={
          <button
            onClick={() =>
              handleDrain({ address, chainId, transferAmount: fromInputValue })
            }
            disabled={
              isLoading ||
              !isConnected ||
              +fromInputValue > +walletBalance ||
              fromInputValue === 0
            }
            className="w-full bg-[#6E56CF] text-white h-12 font-semibold mt-3 rounded-full hover:opacity-80 font-inter disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed"
          >
            {!isLoading && activeTab === 1 && fromInputValue <= walletBalance
              ? `Deposit ${fromPrice}`
              : activeTab === 2
              ? `Withdraw ${amount}`
              : !isLoading && +fromInputValue > +walletBalance && isConnected
              ? "Insufficient Balance"
              : "Enter an amount"}
          </button>
        }
      />

      <div className="w-full flex mt-2">
        <a
          href="https://conduit.xyz/?utm_source=superbridge&amp;utm_medium=affiliate&amp;utm_campaign=poweredby"
          target="_blank"
          className="text-[11px] font-medium tracking-tighter flex gap-1 items-center leading-none text-muted-foreground mx-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="73"
            height="81"
            viewBox="0 0 73 81"
            fill="none"
            class="fill-muted-foreground w-3 h-3"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M60.7269 40.4952C62.6351 40.656 64.534 41.2327 66.3019 42.2632C72.7047 46.0021 74.9029 54.2789 71.2034 60.75C67.5039 67.2211 59.3144 69.4427 52.9116 65.7037C51.1437 64.6733 49.6985 63.2979 48.6088 61.7096C49.4272 63.4585 49.8903 65.406 49.8903 67.4669C49.8903 74.9402 43.8943 81 36.5 81C29.1056 81 23.1097 74.9402 23.1097 67.4669C23.1097 65.406 23.5727 63.4585 24.3912 61.7096C23.2968 63.2979 21.8563 64.6733 20.0884 65.7037C13.6855 69.4427 5.49609 67.2211 1.7966 60.75C-1.90293 54.2742 0.295282 45.9973 6.69808 42.2632C8.466 41.2327 10.3649 40.656 12.2731 40.4952C10.3649 40.3346 8.466 39.7673 6.69808 38.7368C0.295282 34.9979 -1.90293 26.7211 1.7966 20.25C5.49609 13.7789 13.6855 11.5573 20.0884 15.2963C21.8516 16.3267 23.2921 17.7069 24.3819 19.2952C23.568 17.5463 23.1097 15.594 23.1097 13.5331C23.1097 6.05981 29.1056 0 36.5 0C43.8943 0 49.8903 6.05981 49.8903 13.5331C49.8903 15.594 49.4319 17.5463 48.6181 19.2952C49.7079 17.7069 51.1437 16.3267 52.9116 15.2963C59.3144 11.5573 67.5039 13.7789 71.2034 20.25C74.9029 26.7211 72.7047 34.9979 66.3019 38.7368C64.534 39.7673 62.6351 40.3346 60.7269 40.4952ZM47.2992 59.313C45.695 55.5267 45.8166 51.0552 48.0101 47.2169C50.2036 43.3787 53.9733 41.0388 58.0189 40.5472L36.5047 40.5L47.2197 21.6444C44.7783 24.9391 40.8824 27.0709 36.5 27.0709C32.1176 27.0709 28.2217 24.9391 25.7803 21.6444L36.4953 40.5L14.9811 40.5472C19.022 41.0342 22.7964 43.3787 24.9899 47.2169C27.1834 51.0552 27.3003 55.5267 25.7008 59.313L36.5 40.5094L47.2992 59.313Z"
            ></path>
          </svg>
          <span>Powered by Conduit</span>
        </a>
      </div>

      <AddressModal onClose={() => setIsModalOpen(false)} open={isModalOpen} />
    </>
  );
};

export default SwapField;
