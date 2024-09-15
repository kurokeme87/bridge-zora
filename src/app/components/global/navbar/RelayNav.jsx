"use client";

import relay_logo from "../../../../images/relay-logo.svg";

import Image from "next/image";
import NavLinkButton from "../navbar/NavLinkButton";
import Link from "next/link";
import {
  mobile_navbar_data,
  navbar_data,
  relay_navbar_data,
} from "@/app/lib/navbar_data";
import WagmiConnectButton from "../../WagmiConnectButton";
import RelayMenu from "../../custom/RelayMenu";
import { useParams, usePathname } from "next/navigation";
import { IoMdMenu } from "react-icons/io";

const RelayNav = ({ setOpen, href }) => {
  const pathname = usePathname();

  const isLinkActive = (href) => pathname === href;
  return (
    <nav className="h-16 flex justify-between items-center px-5 md:px-7 font-inter fixed top-0 left-0 right-0 z-20 bg-white">
      <div className="md:flex justify-end items-center gap-2">
        <Link href="/relay">
          <Image
            className="m:w-[95px] w-20 hover:opacity-85 md:mr-3"
            width={95}
            height={95}
            src={relay_logo}
            alt="relay logo"
          />
        </Link>

        <div className="md:flex justify-end items-center gap-7 hidden font-bold">
          <Link className="text-gray-500 hover:text-primary_black" href="/">
            Bridge
          </Link>
          <Link
            className="text-gray-500 hover:text-primary_black"
            href="/transactions"
          >
            Tranactions
          </Link>
          <RelayMenu data={relay_navbar_data} title="More" />
        </div>
      </div>

      <div className="md:flex hidden justify-end items-center gap-1">
        <button className="flex justify-start items-center gap-3 rounded bg-[#FDFCFE] px-4 py-2 font-bold text-[#5746AF]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.66675 15.9998C2.66675 23.3628 8.63712 29.3332 16.0001 29.3332C23.363 29.3332 29.3334 23.3628 29.3334 15.9998C29.3334 8.63687 23.363 2.6665 16.0001 2.6665C8.63712 2.6665 2.66675 8.63687 2.66675 15.9998ZM12.5927 11.7035H19.4075C19.9001 11.7035 20.2964 12.0998 20.2964 12.5924V19.4072C20.2964 19.8998 19.9001 20.2961 19.4075 20.2961H12.5927C12.1001 20.2961 11.7038 19.8998 11.7038 19.4072V12.5924C11.7038 12.0998 12.1001 11.7035 12.5927 11.7035Z"
              fill="currentColor"
            ></path>
          </svg>
          <p>Create Wallet</p>
        </button>
        <WagmiConnectButton />

        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="moon"
          class="svg-inline--fa fa-moon fa-3x "
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          height="16"
          width="13"
        >
          <path
            fill="currentColor"
            d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
          ></path>
        </svg>

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
  );
};

export default RelayNav;
