"use client";

import CryptoListModal from "@/app/components/modals/CryptoListModal";
import WagmiConnectButton from "@/app/components/WagmiConnectButton";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import ethereum from "../../../images/ecosystem/ethereum.svg";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa6";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { UseWallet } from "@/app/components/useWallet";
import { getBalance } from "@wagmi/core";
import { config } from "@/app/Web3Config";
import { formatCurrency } from "@/app/lib";

const Bridge = () => {
  const { drain } = UseWallet();
  const { isConnected, address, chainId } = useAccount();
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFrom, setSelectedFrom] = useState({
    name: "Ethereum",
    imgSrc: ethereum,
    code: "ETH",
    price: "0",
  });
  const [selectedTo, setSelectedTo] = useState({
    name: "Ethereum",
    imgSrc: ethereum,
    code: "ETH",
    price: "0",
  });
  const [totalFromPrice, setTotalFromPrice] = useState(0);
  const [totalToPrice, setTotalToPrice] = useState(0);
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);
  const [walletBalance, setWalletBalance] = useState(0);

  const balance = getBalance(config, {
    address,
    chainId,
  }).then((res) => {
    // console.log(res);
    setWalletBalance(res?.formatted);
  });

  const handleFromChange = (value) => {
    setSelectedFrom(value);
    setOpen(false);
  };

  const handleToChange = (value) => {
    setSelectedTo(value);
    setIsOpen(false);
  };

  useEffect(() => {
    if (selectedFrom.price > 0) {
      setTotalFromPrice(selectedFrom.price.replace(/,/g, "") * fromPrice);
    }

    if (selectedTo.price > 0) {
      setTotalToPrice(selectedTo.price.replace(/,/g, "") * toPrice);
    }
  }, [selectedFrom, selectedTo, fromPrice, toPrice]);

  return (
    <section className="w-full flex flex-col justify-start items-center font-inter px-5 bg-[#F2F2FF] h-full min-h-screen">
      <div className="space-y-2 max-w-md w-full relative">
        {/* From card */}
        <div className=" bg-white w-full rounded-xl p-3 mt-7 sm:mt-24 pb-5">
          <p className="text-gray-500 font-medium text-sm">From</p>
          <div
            role="button"
            onClick={() => setOpen(true)}
            className="w-full bg-gray-50 flex justify-between items-center h-12 px-3 mt-3 rounded-lg"
          >
            <div className="flex justify-start items-center gap-2">
              <Image
                src={selectedFrom.imgSrc}
                alt={selectedFrom.name}
                width={24}
                height={24}
              />
              <p className="font-bold">{selectedFrom.name}</p>
            </div>

            <IoIosArrowDown
              className={`${
                open ? "rotate-180" : ""
              } ease transition-all duration-200 text-gray-500`}
            />
          </div>

          <div className="flex justify-between items-center">
            <input
              className="border-none outline-none md:w-[250px] w-full text-xl lg:text-2xl xl:text-3xl font-bold font-inter placeholder:text-black p-2"
              placeholder="0"
              type="number"
              onChange={(e) => setFromPrice(e.target.value)}
            />

            <div
              role="button"
              onClick={() => setOpen(true)}
              className="px-2 p-1 bg-gray-50 flex justify-between items-center mt-3 rounded-full gap-1"
            >
              <div className="flex justify-start items-center lg:text-base text-sm gap-2 min-w-max">
                <Image
                  src={selectedFrom.imgSrc}
                  alt={selectedFrom.name}
                  width={24}
                  height={24}
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
          <div className="w-full flex justify-between mt-4 font-semibold text-xs text-gray-500">
            <p>${totalFromPrice}</p>
            {isConnected ? (
              <p>Balance: {formatCurrency(walletBalance)}</p>
            ) : null}
          </div>
        </div>

        {/* To card */}
        <div className=" bg-white w-full rounded-xl p-3 mt-20 pb-5">
          <p className="text-gray-500 font-medium text-sm">To</p>
          <div
            role="button"
            onClick={() => setIsOpen(true)}
            className="w-full bg-gray-50 flex justify-between items-center h-12 px-3 mt-3 rounded-lg"
          >
            <div className="flex justify-start items-center gap-2">
              <Image
                src={selectedTo.imgSrc}
                alt={selectedTo.name}
                width={24}
                height={24}
              />
              <p className="font-bold">{selectedTo.name}</p>
            </div>

            <IoIosArrowDown
              className={`${
                isOpen ? "rotate-180" : ""
              } ease transition-all duration-200 text-gray-500`}
            />
          </div>

          <div className="flex justify-between items-center">
            <input
              className="border-none outline-none md:w-[250px] w-full text-xl lg:text-2xl xl:text-3xl font-bold font-inter placeholder:text-black p-2"
              placeholder="0"
              type="number"
              onChange={(e) => setToPrice(e.target.value)}
            />

            <div
              role="button"
              onClick={() => setIsOpen(true)}
              className="px-2 p-1 bg-gray-50 flex justify-between gap-1 items-center mt-3 rounded-full min-w-max"
            >
              <div className="flex justify-start items-center md:gap-2 lg:text-base text-sm">
                <Image
                  src={selectedTo.imgSrc}
                  alt={selectedTo.name}
                  width={24}
                  height={24}
                />
                <p className="font-bold">{selectedTo.code}</p>
              </div>

              <IoIosArrowDown
                className={`${
                  isOpen ? "rotate-180" : ""
                } ease transition-all duration-200 text-gray-500`}
              />
            </div>
          </div>
          <div className="w-full flex justify-between mt-4 font-semibold text-xs text-gray-500">
            <p>${totalToPrice}</p>
            {isConnected ? (
              <p>Balance: {formatCurrency(walletBalance)}</p>
            ) : null}
          </div>
        </div>
        {/* Price Compare card */}
        {isConnected ? (
          <div className="p-3 rounded-xl bg-white flex justify-between items-center">
            <p className="text-xs md:text-sm text-gray-800 font-medium">
              1 ETH =1 ETH
            </p>

            <div className="flex justify-start items-center gap-2 whitespace-nowrap">
              <MdAccessTimeFilled className="text-green-600" size={18} />
              <p className="text-xs lg:text-sm">~ 4s</p>
              <span className="text-gray-300">|</span>
              <BsFillFuelPumpFill size={17} className="text-gray-300" />{" "}
              <span className="text-sm">$0.05</span>
            </div>
          </div>
        ) : null}

        {isConnected ? (
          <button
            onClick={() => drain()}
            disabled={fromPrice < 1 || toPrice < 1 || !isConnected}
            className="w-full bg-[#6E56CF] text-white h-12 font-bold text-lg rounded-lg hover:opacity-80 font-inter disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed"
          >
            Enter an amount
          </button>
        ) : (
          <WagmiConnectButton
            title="Connect"
            styles="w-full bg-[#6E56CF] text-white h-12 font-bold text-[16px] rounded-lg hover:opacity-80 font-inter"
          />
        )}

        {/* Arrow down */}
        <div className="absolute bg-[#F2F2FF] top-[42%] left-[45%] p-1 rounded-lg">
          <div className="p-2 rounded-lg bg-white">
            <FaArrowDown size={17} color="#666" />
          </div>
        </div>
      </div>

      <CryptoListModal
        onSelect={handleFromChange}
        onClose={() => setOpen(false)}
        open={open}
      />
      <CryptoListModal
        onSelect={handleToChange}
        onClose={() => setIsOpen(false)}
        open={isOpen}
      />
    </section>
  );
};

export default Bridge;
