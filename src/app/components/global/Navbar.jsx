"use client";

import Image from "next/image";
import logo from "../../../images/zorb.svg";
import NavLinkButton from "./navbar/NavLinkButton";
import { HiDotsVertical } from "react-icons/hi";
// import { IoMdMenu } from "react-icons/io";
import Link from "next/link";
import ParticleConnectButton from "./ConnectButton";
import { navbar_data } from "@/app/lib/navbar_data";

const Navbar = ({ setOpen }) => {
  return (
    <nav className="w-full h-16 flex justify-between items-center px-5 border-b border-gray-400">
      <Link href="/">
        <Image
          className="md:w-[35px] w-6 hover:opacity-85"
          width={35}
          height={35}
          src={logo}
          alt="zorb logo"
        />
      </Link>

      <div className="md:flex justify-end items-center gap-16 text-sm hidden">
        <Link href="/" className="hover:font-medium">
          HOME
        </Link>
        <Link href="/transactions" className="hover:font-medium">
          TRANSACTIONS
        </Link>
        <Link href="/distribute" className="hover:font-medium">
          DISTRIBUTE
        </Link>
        <NavLinkButton data={navbar_data} title="GO TO" />
      </div>
      <div className="flex justify-end items-center gap-1">
        <ParticleConnectButton />
        <HiDotsVertical
          onClick={() => setOpen(true)}
          size={20}
          className="md:hidden block"
        />
      </div>
    </nav>
  );
};

export default Navbar;
