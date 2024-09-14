"use client";

import { useCallback, useEffect } from "react";
import {
  // ConnectButton,
  useConnectKit,
  useSwitchChains,
  useParticleProvider,
} from "@particle-network/connect-react-ui";
import { ConnectButton, useAccount } from "@particle-network/connectkit";

import "@particle-network/connect-react-ui/dist/index.css";

function ParticleConnectButton() {
  const connectKit = useConnectKit();
  const provider = useParticleProvider();
  const { isSwtichChain, renderChains } = useSwitchChains();

  useEffect(() => {
    async function chainChanged(chain) {
      console.log("DEMO-onChainChanged：", chain);
    }
    if (connectKit) {
      connectKit.on("chainChanged", chainChanged);
      return () => {
        connectKit.removeListener("chainChanged", chainChanged);
      };
    }
  }, [connectKit]);

  const LogRenderChains = useCallback(() => {
    console.log("isSwtichChain:", isSwtichChain);
    console.log("renderChains:", renderChains);
  }, [renderChains, isSwtichChain]);

  return (
    <div>
      {/* <button className='rounded-3xl px-7 py-3 text-white text-sm font-medium  cursor-pointer bg-[#2D2D2D] hover:bg-gray-800 ease-in transition-all border border-gray-700'></button> */}
      <ConnectButton></ConnectButton>
      {/* {account && <EvmDemo />} */}
    </div>
  );
}

export default ParticleConnectButton;
