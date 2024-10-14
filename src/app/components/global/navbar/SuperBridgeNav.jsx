"use client";

import superbridge_logo from "../../../../images/superbridge-logo.svg";
import Image from "next/image";
import NavLinkButton from "../navbar/NavLinkButton";
import Link from "next/link";
import { mobile_navbar_data } from "@/app/lib/navbar_data";
import { IoMdMenu } from "react-icons/io";
import { useAccount } from "wagmi";
// import AccounModal from "../../modals/AccountModal";
import { useState } from "react";
import SwitchNetworkModal from "../../modals/SwitchNetworkModal";
import { BsChevronDown } from "react-icons/bs";
import { chainImages } from "@/app/lib/network-images";
import ethereum_icon from "../../../../images/ethereum-blue.png";
import BridgeZoraConnectButton from "../BridgeZoraConnectButton";
import ConnectedAccountButton from "../ConnectedAccount";

const SuperBridgeNav = ({ setOpen, transparentBg }) => {
  const { isConnected, chain } = useAccount();
  // const [isOpen, setIsOpen] = useState(false);
  const [isSwitchNetork, setIsSwitchNetork] = useState(false);

  return (
    <>
      <nav
        className={`${
          transparentBg ? "bg-transparent" : "bg-white"
        } h-20 flex justify-between items-center px-5 md:px-7 font-inter fixed top-0 left-0 right-0 z-20`}
      >
        <Link
          href="/superbridge"
          className="py-2 px-3.5 rounded-full bg-white md:mr-7"
        >
          <Image
            className="xl:w-[150px] md:w-32 w-20 hover:opacity-85"
            width={225}
            height={125}
            src={superbridge_logo}
            alt="relay logo"
          />
        </Link>

        <div className="md:flex hidden justify-end items-center gap-4">
          {isConnected ? (
            <button
              onClick={() => setIsSwitchNetork(true)}
              className="px-3 py-2 bg-[#FEFEFE] hover:bg-gray-100 ease transition-all flex items-center gap-2 rounded-xl font-bold hover:scale-105"
            >
              <Image
                src={chainImages[chain.id] || chain?.icon || ethereum_icon}
                width={22}
                height={22}
                alt={chain.name}
              />
              <BsChevronDown />
            </button>
          ) : null}

          <BridgeZoraConnectButton
            connect={
              <button className="font-bold rounded-xl bg-black text-white px-4 hover:opacity-70 h-10">
                Connect
              </button>
            }
            component={<ConnectedAccountButton />}
            isNavbar
          />

          <div className="md:hidden block">
            <NavLinkButton data={mobile_navbar_data} extended={true} />
          </div>
        </div>
        <div
          className="md:hidden block hover:bg-gray-100 rounded-full p-2 focus:bg-gray-200 ease"
          role="button"
        >
          <IoMdMenu onClick={() => setOpen(true)} size={30} color="#999" />
        </div>
      </nav>
      {/* <AccounModal onClose={() => setIsOpen(false)} open={isOpen} /> */}
      <SwitchNetworkModal
        onClose={() => setIsSwitchNetork(false)}
        open={isSwitchNetork}
      />
    </>
  );
};

export default SuperBridgeNav;
