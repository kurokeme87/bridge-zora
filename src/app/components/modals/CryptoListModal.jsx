"use client";

import { crypto_ecosystems } from "@/app/lib/ecosystem";
import Image from "next/image";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdSearch } from "react-icons/md";

const CryptoListModal = ({ open, onClose, onSelect }) => {
  if (!open) return;
  return (
    <div className="p-3 overflow-hidden">
      <div className="fixed top-0 bottom-0 left-0 right-0 opacity-40 bg-black ease transition-all z-20"></div>
      <div className="fixed inset-0 top-[50%] left-[50%] p-4 rounded-2xl -translate-y-[50%] -translate-x-[50%] z-[999] bg-white shadow-md w-full max-w-[400px] h-fit max-h-[500px]">
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
          {crypto_ecosystems.map((item, index) => (
            <div
              role="button"
              key={index}
              onClick={() => onSelect({ name: item.name, imgSrc: item.imgSrc })}
              className="flex justify-start items-center gap-2 p-3 hover:bg-gray-100 ease transition-all"
            >
              <Image src={item.imgSrc} alt={item.name} width={24} height={24} />
              <p
                onClick={onClose}
                className={`w-full text-gray-700 capitalize text-sm font-medium`}
              >
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoListModal;
