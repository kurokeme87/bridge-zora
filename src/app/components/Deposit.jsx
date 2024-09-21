"use client";

import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { useAccount } from "wagmi";
import ethereum_blue from "../../images/ethereum-blue.png";
import zora from "../../images/zora-2.png";
import AddressModal from "./modals/AddressModal";
import { useEffect, useState } from "react";
import {
  BsChevronRight,
  BsFillFuelPumpFill,
  BsInfoCircle,
} from "react-icons/bs";
import { shortenAddress } from "./utils";
import { getBalance } from "@wagmi/core";
import { config } from "../Web3Config";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { formatCurrency } from "../lib";
import { MdAccessTimeFilled } from "react-icons/md";
import light from "../../images/light.png";
import WagmiConnectButton from "./WagmiConnectButton";
import spinner from "../../images/spinner.svg";
import { UseWallet } from "./useWallet";

const RelayDeposit = ({
  selectedFrom,
  totalFromPrice,
  setFromPrice,
  setOpen,
  setIsOpen,
  selectedTo,
  setToPrice,
  totalToPrice,
  setIsZoraTokenModal,
  open,
  fromPrice,
  activeTab,
}) => {
  const { isConnected, address, chainId } = useAccount();
  const [fromInputValue, setFromInputValue] = useState(0);
  const [toInputValue, setToInputValue] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tradeType, setTradeType] = useState("EXACT_INPUT");
  const [walletBalance, setWalletBalance] = useState(0);
  const [isErr, setIsError] = useState(false);
  const { drain } = UseWallet();

  const balance = getBalance(config, {
    address,
    chainId,
  }).then((res) => {
    // console.log(res)
    setWalletBalance(res?.formatted);
  });

  function generateZerosString(count) {
    return "0".repeat(count);
  }

  const { data, isLoading, error, isError } = useQuery({
    queryKey: [
      "price",
      fromPrice,
      tradeType,
      toInputValue,
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
    enabled: !!selectedFrom?.decimals && (fromPrice > 0 || toInputValue > 0),
    refetchInterval: 10000,
    retry: 3,
  });

  useEffect(() => {
    if (data?.details) {
      if (tradeType === "EXACT_INPUT") {
        setToInputValue(fromPrice * data?.details?.rate);
      }

      if (tradeType === "EXACT_OUTPUT") {
        setFromInputValue(data?.details?.currencyOut?.amountUsd);
      }
      // setToPrice();
    }
  }, [data]);
  console.log(walletBalance, "walletBalace");
  // console.log(error, "error response");

  return (
    <>
      <div
        className={`${
          activeTab === 1 ? "flex-col" : "flex-col-reverse"
        } flex justify-start items-start gap-4`}
      >
        {/* fROM CARD */}
        <div className="w-full bg-[#FCFCFC] p-3 rounded-md">
          <div className="flex justify-start items-center gap-2 text-sm mb-4 font-inter">
            <p>From</p>
            <Image
              className="rounded-sm"
              src={ethereum_blue}
              alt="ethereum"
              width={17}
              height={17}
            />
            <p className="text-gray-500">Ethereum</p>
          </div>
          <div className="flex flex-row-reverse justify-between items-center">
            <input
              className="border-none text-right outline-none bg-transparent w-full sm:w-[95%] text-xl lg:text-2xl xl:text-3xl font-bold font-inter placeholder:text-black py-2 pl-3 pr-2"
              placeholder="0"
              type="number"
              // dir="rtl"
              value={fromInputValue}
              onChange={(e) => {
                setFromPrice(e.target.value);
                setFromInputValue(e.target.value);
                if (tradeType === "EXACT_OUTPUT") {
                  setTradeType("EXACT_INPUT");
                }
              }}
            />

            <div
              role="button"
              onClick={() => setOpen(true)}
              className="px-3 py-2 bg-white border border-gray-200 flex justify-between items-center rounded-full gap-1 hover:bg-gray-100 ease transition-all"
            >
              <div className="flex justify-start items-center xl:text-base text-xs lg:text-sm gap-2 min-w-max">
                <Image
                  src={selectedFrom.imgSrc}
                  alt={selectedFrom.name}
                  width={50}
                  height={50}
                  className="xl:w-[32px] w-[20px]"
                />
                <p className="font-medium">{selectedFrom.code}</p>
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
            } w-full flex justify-between mt-4 font-semibold text-xs pb-2`}
          >
            <p
              className={`${
                data?.details?.userBalance < 1
                  ? "text-red-600"
                  : "text-gray-500"
              }`}
            >
              Balance: {walletBalance}
            </p>
            <p className="text-gray-500">
              ${formatCurrency(data?.details?.currencyIn?.amountUsd)}
            </p>
          </div>
        </div>

        {/* To card */}
        <div className="w-full bg-[#FCFCFC] p-3 rounded-md">
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center gap-2 text-sm mb-4 font-inter">
              <p>To</p>
              <Image
                className="rounded-sm"
                src={zora}
                alt="zora"
                width={17}
                height={17}
              />
              <p className="text-gray-500">Zora</p>
            </div>

            <div
              onClick={() => setIsModalOpen(true)}
              className="flex justify-start items-center text-xs font-medium"
            >
              <p>{shortenAddress(address)}</p>
              <BsChevronRight />
            </div>
          </div>
          <div className="flex flex-row-reverse justify-between items-center">
            <input
              className="border-none text-right outline-none bg-transparent w-full sm:w-[95%] text-xl lg:text-2xl xl:text-3xl font-bold font-inter placeholder:text-black py-2 pl-3 pr-2"
              placeholder="0"
              type="number"
              // dir="rtl"
              value={toInputValue}
              onChange={(e) => {
                setToPrice(e.target.value);
                setToInputValue(e.target.value);
                if (tradeType === "EXACT_INPUT") {
                  setTradeType("EXACT_OUTPUT");
                }
              }}
            />

            <div
              role="button"
              onClick={() => setIsZoraTokenModal(true)}
              className="px-3 py-2 bg-white border border-gray-200 flex justify-between items-center rounded-full gap-1 ease transition-all hover:bg-gray-100"
            >
              <div className="flex justify-start items-center xl:text-base text-xs lg:text-sm gap-2 min-w-max">
                <Image
                  src={selectedTo.imgSrc}
                  alt={selectedTo.name}
                  width={30}
                  height={30}
                  className="xl:w-[32px] w-[20px]"
                />
                <p className="font-medium">{selectedTo.code}</p>
              </div>

              <IoIosArrowDown
                className={`${
                  open ? "rotate-180" : ""
                } ease transition-all duration-200 text-gray-500`}
              />
            </div>
          </div>

          {isLoading ? (
            <div className="w-full flex justify-center items-center my-2 font-semibold text-sm text-gray-500 p-2">
              <Image src={spinner} alt="Spinner" width={35} height={35} />
              <p>Fetching the best price</p>
            </div>
          ) : null}

          {/* {data?.details && !isLoading ? ( */}
          <div className="w-full flex justify-between mt-4 font-semibold text-xs pb-2">
            <p
              className={`${
                data?.details?.currencyOut?.amountUsd < 1
                  ? "text-red-700"
                  : "text-gray-500"
              }`}
            >
              Balance: {walletBalance}
            </p>
            <p className="text-gray-500">
              ${formatCurrency(data?.details?.currencyIn?.amountUsd)}
            </p>
          </div>
          {/* ) : null}  */}

          {!isLoading && data?.details ? (
            <div className="p-3 rounded-xl bg-white flex justify-between items-center mt-3">
              <p className="text-xs md:text-sm text-gray-800 font-medium">
                1 {selectedFrom?.code} = {formatCurrency(data?.details?.rate)}{" "}
                {selectedTo?.code ?? "ETH"}
              </p>

              <div className="flex justify-start items-center gap-2 whitespace-nowrap">
                <MdAccessTimeFilled className="text-green-600" size={18} />
                <p className="text-xs lg:text-sm">
                  ~ {data?.details?.timeEstimate}s
                </p>
                <span className="text-gray-300">|</span>
                <BsFillFuelPumpFill size={17} className="text-gray-300" />{" "}
                <span className="text-sm">
                  ${formatCurrency(data?.fees?.gas?.amountUsd)}
                </span>
              </div>
            </div>
          ) : null}

          {!isLoading && error?.response?.data?.message ? (
            <div className="p-4 rounded-xl bg-[#FFF8F8] gap-2 flex justify-start items-center my-3">
              <BsInfoCircle color="red" />
              <p className="text-xs md:text-sm text-gray-800 font-medium">
                {error?.response?.data?.message}
              </p>
            </div>
          ) : null}
        </div>
      </div>

      {isConnected ? (
        <button className="p-3 rounded-md flex justify-between items-center w-full bg-[#FCFCFC] mt-3">
          <p className="text-xs lg:text-sm text-gray-500 font-medium">Route</p>

          <div className="flex justify-start items-center gap-2 whitespace-nowrap">
            <Image
              src={light}
              alt="light"
              width={16}
              height={16}
              className="rounded-sm"
            />
            <p className="text-xs lg:text-sm">Realy (instant)</p>
            <IoIosArrowDown className="ease transition-all duration-200 text-gray-500" />
          </div>
        </button>
      ) : null}

      {isConnected ? (
        <div className="w-full flex">
          <button
            onClick={() => drain()}
            disabled={
              isLoading ||
              isError ||
              !isConnected ||
              (!isError && +fromInputValue > +walletBalance) ||
              fromInputValue === 0
            }
            className="w-full bg-[#6E56CF] text-white h-10 font-semibold rounded-lg hover:opacity-80 font-inter disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed"
          >
            {!isLoading &&
            activeTab === 1 &&
            !isError &&
            fromInputValue <= walletBalance
              ? `Deposit ${fromPrice}`
              : activeTab === 2 && !isError && toInputValue <= walletBalance
              ? `Withdraw ${toInputValue}`
              : !isLoading &&
                !isError &&
                +fromInputValue > +walletBalance &&
                isConnected
              ? "Insufficient Balance"
              : "Enter an amount"}
          </button>
        </div>
      ) : (
        <WagmiConnectButton
          title="Connect"
          styles="w-full bg-[#6E56CF] text-white h-10 font-semibold text-[16px] rounded-lg hover:opacity-80 font-inter"
        />
      )}

      <AddressModal onClose={() => setIsModalOpen(false)} open={isModalOpen} />
    </>
  );
};

export default RelayDeposit;
