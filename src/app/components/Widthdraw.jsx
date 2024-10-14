"use client";

import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { useAccount } from "wagmi";
import ethereum_blue from "../../images/ethereum-blue.png";
import zora from "../../images/zora-2.png";
import { BsChevronRight } from "react-icons/bs";
import { shortenAddress } from "./utils";
import AddressModal from "./modals/AddressModal";
import { useState } from "react";
import { getBalance } from "@wagmi/core";
import { config } from "../Web3Config";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import WagmiConnectButton from "./WagmiConnectButton";
import light from "../../images/light.png";
import { formatCurrency } from "../lib";

const RelayWithdraw = ({
  selectedFrom,
  totalFromPrice,
  setFromPrice,
  setOpen,
  setIsOpen,
  selectedTo,
  setToPrice,
  totalToPrice,
  isOpen,
  open,
}) => {
  const { isConnected, address, chainId } = useAccount();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [walletBalance, setWalletBalance] = useState(0);

  const balance = getBalance(config, {
    address,
    chainId,
  }).then((res) => {
    console.log(res);
    setWalletBalance(res?.formatted);
  });

  const { data: priceData } = useQuery({
    queryKey: ["price"],
    queryFn: async () =>
      axios
        .post("https://api.relay.link/price", {
          user: "0x000000000000000000000000000000000000dead",
          originChainId: 1,
          destinationChainId: 7777777,
          originCurrency: "0x6b175474e89094c44da98b954eedeac495271d0f",
          destinationCurrency: "0x0000000000000000000000000000000000000000",
          tradeType: "EXACT_INPUT",
          amount: "122000000000000000000",
          referrer: "relay.link/swap",
          useExternalLiquidity: false,
        })
        .then((res) => res.data),
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });
  return (
    <div className="flex flex-col justify-start items-start gap-4">
      {/* fROM CARD */}
      <div className="w-full bg-[#FCFCFC] p-3 rounded-md">
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center gap-2 text-sm mb-4 font-inter">
            <p>From</p>
            <Image
              className="rounded-sm"
              src={zora}
              alt="zora"
              width={17}
              height={17}
            />
            <p>Zora</p>
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
            className="border-none outline-none bg-transparent md:w-[250px] w-full text-xl lg:text-2xl xl:text-3xl font-bold font-inter placeholder:text-black p-2"
            placeholder="0"
            type="number"
            dir="rtl"
            onChange={(e) => setFromPrice(e.target.value)}
          />

          <div
            role="button"
            onClick={() => setOpen(true)}
            className="px-3 py-2 bg-white border border-gray-200 flex justify-between items-center rounded-full gap-1"
          >
            <div className="flex justify-start items-center xl:text-base text-xs lg:text-sm gap-2 min-w-max">
              <Image
                src={selectedFrom.imgSrc}
                alt={selectedFrom.name}
                width={30}
                height={30}
                className="xl:w-[30px] w-[20px]"
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
        <div className="w-full flex justify-between mt-4 font-semibold text-xs text-gray-500">
          <p>${totalFromPrice}</p>
          {isConnected ? <p>Balance: {formatCurrency(walletBalance)}</p> : null}
        </div>
      </div>

      {/* To card */}
      <div className="w-full bg-[#FCFCFC] p-3 rounded-md">
        <div className="flex justify-start items-center gap-2 text-sm mb-4 font-inter">
          <p>To</p>
          <Image
            className="rounded-sm"
            src={ethereum_blue}
            alt="ethereum"
            width={17}
            height={17}
          />
          <p>Etheruem</p>
        </div>
        <div className="flex flex-row-reverse justify-between items-center">
          <input
            className="border-none outline-none bg-transparent md:w-[250px] w-full text-xl lg:text-2xl xl:text-3xl font-bold font-inter placeholder:text-black p-2"
            placeholder="0"
            type="number"
            dir="rtl"
            onChange={(e) => setToPrice(e.target.value)}
          />

          <div
            role="button"
            onClick={() => setOpen(true)}
            className="px-3 py-2 bg-white border border-gray-200 flex justify-between items-center rounded-full gap-1"
          >
            <div className="flex justify-start items-center xl:text-base text-xs lg:text-sm gap-2 min-w-max">
              <Image
                src={selectedTo.imgSrc}
                alt={selectedTo.name}
                width={30}
                height={30}
                className="xl:w-[30px] w-[20px]"
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
        <div className="w-full flex justify-between mt-4 font-semibold text-xs text-gray-500">
          <p>${totalToPrice}</p>
          {isConnected ? <p>Balance: {formatCurrency(walletBalance)}</p> : null}
        </div>
      </div>

      {isConnected ? (
        <button className="p-3 rounded-md flex justify-between items-center w-full bg-[#FCFCFC]">
          <p className="text-xs lg:text-sm text-gray-500 font-medium">Route</p>

          <div className="flex justify-start items-center gap-2 whitespace-nowrap">
            <Image
              src={light}
              alt="light"
              width={16}
              height={16}
              className="rounded-sm"
            />
            <p className="text-xs lg:text-sm">Relay (instant)</p>
            <IoIosArrowDown className="ease transition-all duration-200 text-gray-500" />
          </div>
        </button>
      ) : null}

      {isConnected ? (
        <button
          // onClick={() => drain()}
          // disabled={fromPrice < 1 || toPrice < 1 || !isConnected}
          className="w-full bg-[#6E56CF] text-white h-10 font-semibold rounded-lg hover:opacity-80 font-inter disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed"
        >
          Enter an amount
        </button>
      ) : (
        <WagmiConnectButton
          title="Connect"
          styles="w-full bg-[#6E56CF] text-white h-10 font-semibold text-[16px] rounded-lg hover:opacity-80 font-inter"
        />
      )}

      <AddressModal onClose={() => setIsModalOpen(false)} open={isModalOpen} />
    </div>
  );
};

export default RelayWithdraw;
