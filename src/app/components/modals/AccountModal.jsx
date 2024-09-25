"use client";

import { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useAccount, useDisconnect } from "wagmi";
import eclair_vector from "../../../images/eclair-vector.png";
import Image from "next/image";
import { shortenAddressSmall } from "../utils";
import { getBalance, disconnect } from "@wagmi/core";

import { config } from "@/app/Web3Config";
// import { zora_crypto } from "@/app/lib/zora_cryptos";

const AccounModal = ({ open, onClose }) => {
  if (!open) return;

  const dropdowRef = useRef(null);
  const { address, chainId } = useAccount();
  const { disconnect } = useDisconnect();
  const [walletBalance, setWalletBalance] = useState(0);

  const balance = getBalance(config, {
    address,
    chainId,
  }).then((res) => {
    // console.log(res)
    setWalletBalance(res?.formatted);
  });

  const handleDisconnect = () => {
    disconnect();
    onClose();
  };

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

  return (
    <div className="p-3 overflow-hidden">
      <div className="fixed top-0 bottom-0 left-0 right-0 opacity-40 bg-black ease transition-all z-20"></div>
      <div
        ref={dropdowRef}
        className="fixed inset-0 top-[50%] left-[50%] p-4 rounded-2xl -translate-y-[50%] -translate-x-[50%] z-[999] bg-[#F4F4F4] shadow-md w-full max-w-[350px] h-fit"
      >
        <div className="flex justify-end items-center">
          <IoMdClose
            className="bg-[#0000000F] rounded-full p-1"
            size={27}
            color="#777"
            role="button"
            onClick={onClose}
          />
        </div>

        <div className="flex justify-center items-center flex-col my-2.5">
          <Image
            src={eclair_vector}
            width={100}
            height={100}
            alt="eclair vector"
          />

          <p className="font-black mt-2.5">{shortenAddressSmall(address)}</p>
          <p className="text-sm text-gray-500 w-full text-center font-medium">
            {walletBalance}ETH
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-4">
          <button className="text-gray-700 text-xs font-semibold h-12 w-full bg-white flex flex-col justify-center items-center rounded-sm hover:bg-gray-50 ease transition-all hover:scale-105">
            <svg
              fill="none"
              height="16"
              viewBox="0 0 17 16"
              width="17"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Copy</title>
              <path
                d="M3.04236 12.3027H4.18396V13.3008C4.18396 14.8525 5.03845 15.7002 6.59705 15.7002H13.6244C15.183 15.7002 16.0375 14.8525 16.0375 13.3008V6.24609C16.0375 4.69434 15.183 3.84668 13.6244 3.84668H12.4828V2.8418C12.4828 1.29688 11.6283 0.442383 10.0697 0.442383H3.04236C1.48376 0.442383 0.629272 1.29004 0.629272 2.8418V9.90332C0.629272 11.4551 1.48376 12.3027 3.04236 12.3027ZM3.23376 10.5391C2.68689 10.5391 2.39294 10.2656 2.39294 9.68457V3.06055C2.39294 2.47949 2.68689 2.21289 3.23376 2.21289H9.8783C10.4252 2.21289 10.7191 2.47949 10.7191 3.06055V3.84668H6.59705C5.03845 3.84668 4.18396 4.69434 4.18396 6.24609V10.5391H3.23376ZM6.78845 13.9365C6.24158 13.9365 5.94763 13.6699 5.94763 13.0889V6.45801C5.94763 5.87695 6.24158 5.61035 6.78845 5.61035H13.433C13.9799 5.61035 14.2738 5.87695 14.2738 6.45801V13.0889C14.2738 13.6699 13.9799 13.9365 13.433 13.9365H6.78845Z"
                fill="currentColor"
              ></path>
            </svg>
            <p>Copy Address</p>
          </button>
          <button
            onClick={handleDisconnect}
            className="h-12 w-full bg-white text-xs font-semibold flex flex-col justify-center items-center rounded-sm hover:bg-gray-50 ease transition-all hover:scale-105"
          >
            <svg
              fill="none"
              height="16"
              viewBox="0 0 18 16"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Disconnect</title>
              <path
                d="M2.67834 15.5908H9.99963C11.5514 15.5908 12.399 14.7432 12.399 13.1777V10.2656H10.6354V12.9863C10.6354 13.5332 10.3688 13.8271 9.78772 13.8271H2.89026C2.3092 13.8271 2.0426 13.5332 2.0426 12.9863V3.15625C2.0426 2.60254 2.3092 2.30859 2.89026 2.30859H9.78772C10.3688 2.30859 10.6354 2.60254 10.6354 3.15625V5.89746H12.399V2.95801C12.399 1.39941 11.5514 0.544922 9.99963 0.544922H2.67834C1.12659 0.544922 0.278931 1.39941 0.278931 2.95801V13.1777C0.278931 14.7432 1.12659 15.5908 2.67834 15.5908ZM7.43616 8.85059H14.0875L15.0924 8.78906L14.566 9.14453L13.6842 9.96484C13.5406 10.1016 13.4586 10.2861 13.4586 10.4844C13.4586 10.8398 13.7321 11.168 14.1217 11.168C14.3199 11.168 14.4635 11.0928 14.6002 10.9561L16.7809 8.68652C16.986 8.48145 17.0543 8.27637 17.0543 8.06445C17.0543 7.85254 16.986 7.64746 16.7809 7.43555L14.6002 5.17285C14.4635 5.03613 14.3199 4.9541 14.1217 4.9541C13.7321 4.9541 13.4586 5.27539 13.4586 5.6377C13.4586 5.83594 13.5406 6.02734 13.6842 6.15723L14.566 6.98438L15.0924 7.33984L14.0875 7.27148H7.43616C7.01917 7.27148 6.65686 7.62012 6.65686 8.06445C6.65686 8.50195 7.01917 8.85059 7.43616 8.85059Z"
                fill="currentColor"
              ></path>
            </svg>
            <p>Disconnect</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccounModal;
