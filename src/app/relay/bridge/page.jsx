"use client";

import CryptoListModal from "@/app/components/modals/CryptoListModal";
import WagmiConnectButton from "@/app/components/WagmiConnectButton";
import { useState } from "react";
import { useAccount } from "wagmi";
import ethereum from "../../../images/ecosystem/ethereum.svg";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

const Bridge = () => {
  const { isConnected } = useAccount();
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFrom, setSelectedFrom] = useState({
    name: "Ethereum",
    imgSrc: ethereum,
  });
  const [selectedTo, setSelectedTo] = useState({
    name: "Ethereum",
    imgSrc: ethereum,
  });

  const handleFromChange = (value) => {
    setSelectedFrom(value);
    setOpen(false);
  };

  const handleToChange = (value) => {
    setSelectedTo(value);
    setIsOpen(false);
  };

  console.log(selectedFrom, selectedTo);

  return (
    <section className="w-full flex flex-col justify-start items-center  font-inter px-5 bg-[#F2F2FF] h-full min-h-[91vh]">
      <div className="space-y-2 max-w-md w-full">
        {/* From card */}
        <div className=" bg-white w-full rounded-lg p-3 mt-20 pb-10">
          <p className="text-gray-500 font-medium text-sm">From</p>
          <div
            role="button"
            onClick={() => setOpen(true)}
            className="w-full bg-gray-50 flex justify-between items-center h-12 px-3 mt-3"
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
              className="border-none outline-none w-[250px] text-xl lg:text-2xl font-bold font-inter placeholder:text-black p-2"
              placeholder="0"
            />

            <div
              role="button"
              onClick={() => setOpen(true)}
              className="px-2 p-1 bg-gray-50 flex justify-between items-center mt-3 rounded-full"
            >
              <div className="flex justify-start items-center gap-2">
                <Image
                  src={selectedFrom.imgSrc}
                  alt={selectedFrom.name}
                  width={24}
                  height={24}
                />
                <p className="font-bold">ETH</p>
              </div>

              <IoIosArrowDown
                className={`${
                  open ? "rotate-180" : ""
                } ease transition-all duration-200 text-gray-500`}
              />
            </div>
          </div>
          {isConnected ? (
            <div className="w-full flex justify-end mt-2">
              <p className="ml-auto text-xs text-gray-600">Balance: 0</p>
            </div>
          ) : null}
        </div>

        {/* To card */}
        <div className=" bg-white w-full rounded-lg p-3 mt-20 pb-10">
          <p className="text-gray-500 font-medium text-sm">To</p>
          <div
            role="button"
            onClick={() => setIsOpen(true)}
            className="w-full bg-gray-50 flex justify-between items-center h-12 px-3 mt-3"
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
              className="border-none outline-none w-[250px] text-xl lg:text-2xl font-bold font-inter placeholder:text-black p-2"
              placeholder="0"
            />

            <div
              role="button"
              onClick={() => setIsOpen(true)}
              className="px-2 p-1 bg-gray-50 flex justify-between items-center mt-3 rounded-full"
            >
              <div className="flex justify-start items-center gap-2">
                <Image
                  src={selectedTo.imgSrc}
                  alt={selectedTo.name}
                  width={24}
                  height={24}
                />
                <p className="font-bold">ETH</p>
              </div>

              <IoIosArrowDown
                className={`${
                  isOpen ? "rotate-180" : ""
                } ease transition-all duration-200 text-gray-500`}
              />
            </div>
          </div>
          {isConnected ? (
            <div className="w-full flex justify-end mt-2">
              <p className="ml-auto text-xs text-gray-600">Balance: 0</p>
            </div>
          ) : null}
        </div>

        {isConnected ? (
          <button
            disabled
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
