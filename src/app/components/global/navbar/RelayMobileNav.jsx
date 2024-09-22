"use client";

import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import relay_logo from "../../../../images/relay-logo.svg";
import WagmiConnectButton from "../../WagmiConnectButton";
import { useAccount } from "wagmi";
import Image from "next/image";

const RelayMobileNav = ({ open, setOpen }) => {
  const { isConnected } = useAccount();
  return (
    <div
      className={`${
        open
          ? "translate-x-0 opacity-100 visible"
          : "translate-x-[700px] opacity-0 invisible"
      } ease-out transition-all duration-300 md:hidden block fixed top-0 bottom-0 left-0 right-0 bg-white z-50`}
    >
      <div className="relative">
        <div
          className="absolute topy-4 right-5 hover:bg-gray-100 rounded-full p-2 focus:bg-gray-200 ease"
          role="button"
          onClick={() => setOpen()}
        >
          <IoMdClose size={25} color="#999" />
        </div>

        <Link href="/relay">
          <Image
            className="m:w-[95px] w-20 hover:opacity-85 absolute top-6 left-5"
            width={95}
            height={95}
            src={relay_logo}
            alt="relay logo"
          />
        </Link>

        <div className="flex flex-col justify-start items-start h-full w-full pt-20 pl-2 font-semibold font-inter">
          <Link
            onClick={() => setOpen(false)}
            href="/bridge"
            className="w-full py-4 p-2 hover:bg-gray-100 ease transition-all"
          >
            Bridge
          </Link>
          <Link
            onClick={() => setOpen(false)}
            href="/relay/transactions"
            className="w-full py-4 p-2  hover:bg-gray-100 ease transition-all"
          >
            Transactions
          </Link>
          <Link
            onClick={() => setOpen(false)}
            href="https://docs.relay.link/"
            className="w-full py-4 p-2  hover:bg-gray-100 ease transition-all"
          >
            Docs
          </Link>

          {isConnected ? null : (
            <WagmiConnectButton styles="bg-purple-500 text-white font-bold" />
          )}

          <svg
            className="mt-10 ml-3"
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
        </div>
      </div>
    </div>
  );
};

export default RelayMobileNav;
