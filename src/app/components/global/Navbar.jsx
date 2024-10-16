"use client";

import Image from "next/image";
import logo from "../../../images/zorb.svg";
import NavLinkButton from "./navbar/NavLinkButton";
import Link from "next/link";
import { mobile_navbar_data, navbar_data } from "@/app/lib/navbar_data";
import WagmiConnectButton from "../WagmiConnectButton";
import { usePathname } from "next/navigation";
import BridgeZoraConnectButton from "./BridgeZoraConnectButton";
import ConnectedAccountButton from "./ConnectedAccount";

const Navbar = ({ setOpen, href }) => {
  const pathname = usePathname();

  const isLinkActive = (href) => pathname === href;
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
        <BridgeZoraConnectButton
          isNavbar
          connect={
            <button className="h-9 px-5 bg-black text-white">Connect</button>
          }
          component={<ConnectedAccountButton />}
        />

        <div className="md:hidden block">
          <NavLinkButton data={mobile_navbar_data} extended={true} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
