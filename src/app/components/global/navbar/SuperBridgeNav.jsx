"use client";

import superbridge_logo from "../../../../images/superbridge-logo.svg";
import Image from "next/image";
import NavLinkButton from "../navbar/NavLinkButton";
import Link from "next/link";
import { mobile_navbar_data, relay_navbar_data } from "@/app/lib/navbar_data";
import WagmiConnectButton from "../../WagmiConnectButton";
// import RelayMenu from "../../custom/RelayMenu";
import { usePathname } from "next/navigation";
import { IoMdMenu } from "react-icons/io";
import { useAccount } from "wagmi";
// import { shortenAddressSmall } from "../../utils";
import AccounModal from "../../modals/AccountModal";
import { useState } from "react";
import SwitchNetworkModal from "../../modals/SwitchNetworkModal";
import { BsChevronDown } from "react-icons/bs";
import { chainImages } from "@/app/lib/network-images";
import ethereum_icon from "../../../../images/ethereum-blue.png";

const SuperBridgeNav = ({ setOpen, transparentBg }) => {
  const pathname = usePathname();
  const { isConnected, address, chain } = useAccount();
  const [isOpen, setIsOpen] = useState(false);
  const [isSwitchNetork, setIsSwitchNetork] = useState(false);
  // console.log(chain, "chain");

  const isLinkActive = (href) => pathname === href;
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

          {isConnected ? (
            <button
              onClick={() => setIsOpen(true)}
              className="px-3 py-2 bg-[#FEFEFE] hover:bg-gray-100 ease transition-all hover:scale-105 flex items-center gap-2 rounded-xl font-bold"
            >
              <svg
                className="rounded-full"
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                height="22"
                width="22"
              >
                <rect
                  x="0"
                  y="0"
                  rx="0"
                  ry="0"
                  height="24"
                  width="24"
                  transform="translate(-0.29116100145319845 7.069814247820754) rotate(134.3 12 12)"
                  fill="#245ce1"
                ></rect>
                <rect
                  x="0"
                  y="0"
                  rx="0"
                  ry="0"
                  height="24"
                  width="24"
                  transform="translate(9.527967720893 8.965330299129596) rotate(82.7 12 12)"
                  fill="#034a5d"
                ></rect>
                <rect
                  x="0"
                  y="0"
                  rx="0"
                  ry="0"
                  height="24"
                  width="24"
                  transform="translate(21.873622963723648 -7.975111659589141) rotate(506.0 12 12)"
                  fill="#fc8400"
                ></rect>
                <rect
                  x="0"
                  y="0"
                  rx="0"
                  ry="0"
                  height="24"
                  width="24"
                  transform="translate(-18.06515442254685 -18.90926993438925) rotate(378.5 12 12)"
                  fill="#c71443"
                ></rect>
              </svg>
              <BsChevronDown />
            </button>
          ) : (
            <WagmiConnectButton
              styles="font-bold rounded-xl hover:opacity-70 h-10"
              title="Connect"
            />
          )}

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
      <AccounModal onClose={() => setIsOpen(false)} open={isOpen} />
      <SwitchNetworkModal
        onClose={() => setIsSwitchNetork(false)}
        open={isSwitchNetork}
      />
    </>
  );
};

export default SuperBridgeNav;
