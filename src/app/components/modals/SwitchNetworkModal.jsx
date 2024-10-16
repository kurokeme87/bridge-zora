"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
// import { MdSearch } from "react-icons/md";
import { useAccount, useSwitchChain } from "wagmi";
import ethereum from "../../../images/eth.svg";
import { chainImages } from "@/app/lib/network-images";
import { GoDotFill } from "react-icons/go";

const SwitchNetworkModal = ({ open, onClose }) => {
  const dropdowRef = useRef(null);
  const { chains, switchChainAsync } = useSwitchChain();
  const { chainId } = useAccount();

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
      <div className="fixed top-0 bottom-0 left-0 right-0 opacity-50 bg-black ease transition-all z-20"></div>
      <div
        ref={dropdowRef}
        className="fixed inset-0 top-[50%] left-[50%] p-4 rounded-2xl -translate-y-[50%] -translate-x-[50%] z-[999] bg-white shadow-md w-full max-w-[400px] h-fit max-h-[500px]"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-black font-black text-base lg:text-lg">
            Switch Networks
          </h2>
          <IoMdClose
            className="p-2 rounded-full bg-gray-100"
            size={35}
            color="#555"
            role="button"
            onClick={onClose}
          />
        </div>

        <div className="flex flex-col overflow-y-auto h-80 mt-5">
          {chains.map((item, index) => {
            // console.log(item, "item");
            return (
              <div
                role="button"
                key={index}
                onClick={() => {
                  switchChainAsync({ chainId: item.id }).then((res) => {
                    onClose();
                  });
                }}
                className={`${
                  chainId === item?.id
                    ? "bg-[#242327] text-white"
                    : "text-gray-900 hover:bg-gray-100"
                } flex justify-between items-center px-3 py-2 ease transition-all rounded-xl text-sm font-bold w-full`}
              >
                <div className="flex justify-start items-center gap-1 w-full">
                  <Image
                    unoptimized
                    src={chainImages[item.id] || item?.icon || ethereum}
                    alt={item.name}
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                  <p className="w-full capitalize">{item?.name}</p>

                  {chainId === item?.id ? (
                    <div className="flex justify-start items-center gap-2">
                      <span className="text-white font-semibold">
                        Connected
                      </span>
                      <GoDotFill color="#30E000" size={17} className="mt-0.5" />
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SwitchNetworkModal;
