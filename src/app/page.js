"use client";

import Image from "next/image";
import zora_network from "../images/ZORA_NETWORK.svg";
import relay from "../images/relay-bridge.svg";
import superbridge from "../images/superbridge-bridge.svg";
import relay_logo from "../images/relay-logo.svg";
import superbridge_logo from "../images/superbridge-logo.svg";
import WalletDetailsNav from "./components/custom/WalletDetailsNav";
import ApplinkCard from "./components/custom/ApplinkCard";

export default function Home() {
  return (
    <div className="m-0 p-0">
      <section className="w-full flex flex-col justify-center items-center px-5">
        <div className="px-5 py-10 w-full text-center border-b border-gray-400">
          <Image
            className="mx-auto"
            src={zora_network}
            width={375}
            height={375}
            alt="zora network"
          />
        </div>
      </section>

      <div className="w-full flex justify-center items-center md:flex-nowrap flex-wrap gap-20 mt-20 px-4">
        <ApplinkCard
          link="https://relay.link/zora"
          img={relay}
          logo={relay_logo}
          description="Instant bridging at low cost with Relay"
        />

        <ApplinkCard
          link="https://relay.link/zora"
          img={superbridge}
          logo={superbridge_logo}
          description="Free 7-day withdrawals with Superbridge"
        />
      </div>

      <p className="w-full text-center text-sm mt-20 text-gray-600">
        THESE SERVICES ARE PROVIDED BY THIRD PARTIES.
      </p>
      <p className="w-full text-center text-sm text-gray-600 mb-16">
        ZORA IS NOT RESPONSIBLE FOR ANY LOSS OF OR DELAY IN RECEIVING YOUR FUNDS
        RESULTING IN THE USE OF THESE SERVICES.
      </p>

      <WalletDetailsNav />
    </div>
  );
}
