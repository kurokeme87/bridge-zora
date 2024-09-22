import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IoMdClose } from "react-icons/io";
import { getTransactionConfirmations } from "@wagmi/core";
import { useAccount } from "wagmi";
import { config } from "@/app/Web3Config";

const Activity = ({ isVisible, onClose }) => {
  const { chainId, address } = useAccount();
  const transaction = getTransactionConfirmations(config, {
    hash: address.toString(),
    chainId,
  });
  console.log(transaction, "all transactions");

  return (
    <div
      className={`
       ${
         !isVisible
           ? "-translate-y-96 animate-bounce-in"
           : "translate-y-[10000px]"
       } space-y-2 max-w-[400px] min-h-[500px] w-full relative mt-72 rounded-[30px] shadow-tab_box px-4 py-6 bg-white ease-in-out duration-300 transition-transform`}
    >
      <div className="pb-6 flex justify-between items-center border-b">
        <p className="font-bold">Activity</p>
        <IoMdClose
          className="bg-[#0000000F] rounded-full p-2 cursor-pointer"
          size={37}
          color="black"
          role="button"
          onClick={onClose}
        />
      </div>

      <div className="flex flex-col justify-center items-start h-full"></div>
    </div>
  );
};

export default Activity;
