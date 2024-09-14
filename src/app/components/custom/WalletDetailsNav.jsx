"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { clientHttp } from "../../../../utils/http";
import axios from "axios";

const WalletDetailsNav = () => {
  // const { data, isLoading } = useQuery({
  //   queryKey: ["main-data"],
  //   queryFn: async () =>
  //     await axios
  //       .post("https://rpc.zora.energy/", {
  //         jsonrpc: "2.0",
  //         id: 1,
  //         method: "eth_getBlockByNumber",
  //         params: ["latest", false],
  //       })
  //       .then((res) => res.data),
  //   refetchOnMount: false,
  //   refetchOnWindowFocus: false,
  //   refetchInterval: 10000,
  // });

  // console.log(data, "data");

  return (
    <nav className="flex justify-center items-center gap-10 lg:gap-20 w-full pt-3 text-xs md:text-sm font-medium flex-wrap">
      <div className="">
        <p className="text-gray-400">CHAIN NAME</p>
        <p className="text-lg">Zora</p>
      </div>

      <div className="">
        <p className="text-gray-400">CHAIN ID</p>
        <p className="text-lg">7777777</p>
      </div>

      <div className="">
        <p className="text-gray-400">LAST BLOCK</p>
        <p className="text-lg">19813245</p>
      </div>

      <div className="">
        <p className="text-gray-400">LAST L1 BLOCK</p>
        <p className="text-lg">20749133</p>
      </div>

      <div className="">
        <p className="text-gray-400">L1 GAS PRICE</p>
        <p className="text-lg">2.27</p>
      </div>

      <div className="">
        <p className="text-gray-400">NETWORK TVL</p>
        <p className="text-lg">7698.90</p>
      </div>
    </nav>
  );
};

export default WalletDetailsNav;
