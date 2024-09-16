"use client";

import { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdAccessTimeFilled } from "react-icons/md";
import { useAccount } from "wagmi";
import { FaCheckCircle } from "react-icons/fa";

const AddressModal = ({ open, onClose }) => {
  const dropdowRef = useRef(null);
  const { address } = useAccount();

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

  if (!open) return;
  return (
    <div className="p-3 overflow-hidden">
      <div className="fixed top-0 bottom-0 left-0 right-0 opacity-40 bg-black ease transition-all z-20"></div>
      <div
        ref={dropdowRef}
        className="fixed inset-0 top-[50%] left-[50%] p-4 rounded-2xl -translate-y-[50%] -translate-x-[50%] z-[999] bg-white shadow-md w-full max-w-[450px] h-fit"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-black font-semibold">To address</h2>
          <IoMdClose
            className=""
            size={18}
            color="#888"
            role="button"
            onClick={onClose}
          />
        </div>

        <div className="p-3 rounded-md w-full bg-[#F3F3F3] text-sm mt-4 mb-3">
          {address}
        </div>

        <div className="flex justify-start items-center gap-2 bg-green-50 text-green-950 font-medium text-xs px-3 py-2">
          <FaCheckCircle className="text-green-600" size={17} />
          <p>Connect wallet</p>
        </div>

        <button className="h-10 w-full bg-black text-white font-semibold rounded-lg mt-4">
          Save
        </button>
      </div>
    </div>
  );
};

export default AddressModal;
