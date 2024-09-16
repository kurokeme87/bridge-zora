"use client";

import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { useAccount } from "wagmi";
import ethereum_blue from "../../images/ethereum-blue.png";
import zora from "../../images/zora-2.png";
import AddressModal from "./modals/AddressModal";
import { useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import { shortenAddress } from "./utils";

const RelayDeposit = ({
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
  const { isConnected, address } = useAccount();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="">
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
          <p>Ethereum</p>
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
          {isConnected ? <p>Balance: 0</p> : null}
        </div>
      </div>

      {/* To card */}
      <div className="w-full bg-[#FCFCFC] p-3 rounded-md mt-3">
        <div className="flex justify-between items-center">
          <div
            // onClick={() => setIsModalOpen(true)}
            className="flex justify-start items-center gap-2 text-sm mb-4 font-inter"
          >
            <p>To</p>
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
          {isConnected ? <p>Balance: 0</p> : null}
        </div>
      </div>

      <AddressModal onClose={() => setIsModalOpen(false)} open={isModalOpen} />
    </div>
  );
};

export default RelayDeposit;
