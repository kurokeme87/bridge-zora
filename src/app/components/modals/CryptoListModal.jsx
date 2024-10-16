"use client";

import { zora_crypto } from "@/app/lib/zora_cryptos";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { MdSearch } from "react-icons/md";

const CryptoListModal = ({ open, onClose, onSelect }) => {
  const dropdowRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdowRef.current && !dropdowRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function formatString(str) {
    const firstFour = str.slice(0, 4); // Get the first 4 characters
    const lastFour = str.slice(-4); // Get the last 4 characters
    return `${firstFour}...${lastFour}`;
  }

  if (!open) return;
  return (
    <div className="p-3 overflow-hidden">
      <div className="fixed top-0 bottom-0 left-0 right-0 opacity-40 bg-black ease transition-all z-20"></div>
      <div
        ref={dropdowRef}
        className="fixed inset-0 top-[50%] left-[50%] p-4 rounded-2xl -translate-y-[50%] -translate-x-[50%] z-[999] bg-white shadow-md w-full max-w-[400px] h-fit max-h-[500px]"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-black font-semibold">Select chain</h2>
          <IoMdClose
            className=""
            size={18}
            color="#888"
            role="button"
            onClick={onClose}
          />
        </div>

        <div className="relative rounded-full h-11 text-gray-800 w-full mt-4">
          <MdSearch color="#777" size={23} className="absolute left-3 top-3" />
          <input
            type="search"
            placeholder="Search for a chain"
            className="w-full h-11 bg-[#f3f3f3] pl-10 rounded-lg outline-[#5746AF]"
          />
        </div>

        <div className="flex flex-col overflow-y-auto h-80 mt-2">
          {Object.entries(zora_crypto).map(([key, item], index) => {
            // console.log(item, "item");
            return (
              <div
                role="button"
                key={index}
                onClick={() =>
                  onSelect({
                    name: item[0].name,
                    imgSrc: item[0].metadata.logoURI,
                    code: item[0].symbol,
                    price: item[0].decimals,
                    decimals: item[0].decimals,
                    chainId: item[0].chainId,
                    address: item[0].address,
                  })
                }
                className="flex justify-start items-center gap-2 p-3 hover:bg-gray-100 ease transition-all rounded-md"
              >
                <Image
                  className="rounded-full"
                  src={item[0].metadata?.logoURI}
                  alt={item.name}
                  width={35}
                  height={35}
                />
                <div>
                  <p
                    onClick={onClose}
                    className={`w-full text-gray-900 capitalize text-sm font-medium`}
                  >
                    {item[0]?.symbol}
                  </p>
                  <p
                    onClick={onClose}
                    className={`w-full text-gray-500 text-xs font-medium`}
                  >
                    {formatString(item[0]?.address)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CryptoListModal;
