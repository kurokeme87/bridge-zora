"use client";

import CryptoListModal from "@/app/components/modals/CryptoListModal";
import WagmiConnectButton from "@/app/components/WagmiConnectButton";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import ethereum from "../../images/ecosystem/ethereum.svg";
import zorb from "../../images/zora.png";
import light from "../../images/light.png";
import Image from "next/image";
import { MdAccessTimeFilled } from "react-icons/md";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { UseWallet } from "@/app/components/useWallet";
import RelayWithdraw from "../components/Widthdraw";
import RelayDeposit from "../components/Deposit";
import RelayNav from "../components/global/navbar/RelayNav";
import RelayMobileNav from "../components/global/navbar/RelayMobileNav";
import { IoIosArrowDown } from "react-icons/io";

const Page = () => {
  const { drain } = UseWallet();
  const { isConnected } = useAccount();
  const [activeTab, setActiveTab] = useState(1);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFrom, setSelectedFrom] = useState({
    name: "Ethereum",
    imgSrc: ethereum,
    code: "ETH",
    price: "0",
  });
  const [selectedTo, setSelectedTo] = useState({
    name: "Ethereum",
    imgSrc: ethereum,
    code: "ETH",
    price: "0",
  });
  const [totalFromPrice, setTotalFromPrice] = useState(0);
  const [totalToPrice, setTotalToPrice] = useState(0);
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);

  const handleFromChange = (value) => {
    setSelectedFrom(value);
    setOpen(false);
  };

  const handleToChange = (value) => {
    setSelectedTo(value);
    setIsOpen(false);
  };

  useEffect(() => {
    if (selectedFrom.price > 0) {
      setTotalFromPrice(selectedFrom.price.replace(/,/g, "") * fromPrice);
    }

    if (selectedTo.price > 0) {
      setTotalToPrice(selectedTo.price.replace(/,/g, "") * toPrice);
    }
  }, [selectedFrom, selectedTo, fromPrice, toPrice]);

  useEffect(() => {}, []);

  return (
    <>
      <RelayNav transparentBg={true} setOpen={setIsNavOpen} />
      <RelayMobileNav open={isNavOpen} setOpen={setIsNavOpen} />
      <section className="w-full flex flex-col justify-center items-center font-inter px-5 bg-[#EBEBEB] h-full min-h-screen">
        <div className="space-y-2 max-w-md w-full relative bg-white mt-10 rounded-2xl shadow-tab_box p-4">
          <Image
            src={zorb}
            height={100}
            width={100}
            alt="zora logo"
            className="mx-auto mb-10"
          />

          <div className="px-4 pb-2">
            <div className="bg-[#F1F3F5] rounded-lg grid grid-cols-2 p-0.5 text-sm xl:text-base font-semibold text-[#11181C]">
              <div
                role="button"
                onClick={() => setActiveTab(1)}
                className={`${
                  activeTab === 1 ? "bg-white" : "bg-transparent"
                } ease transition-background duration-300 w-full h-10 text-center flex justify-center items-center rounded-lg`}
              >
                Deposit
              </div>
              <div
                role="button"
                onClick={() => setActiveTab(2)}
                className={`${
                  activeTab === 2 ? "bg-white" : "bg-transparent"
                } ease transition-background duration-300 w-full h-10 text-center flex justify-center items-center rounded-lg`}
              >
                Withdraw
              </div>
            </div>
          </div>

          {activeTab === 2 ? (
            <RelayWithdraw
              selectedFrom={selectedFrom}
              selectedTo={selectedTo}
              setFromPrice={setFromPrice}
              setIsOpen={setIsOpen}
              setOpen={setOpen}
              setToPrice={setToPrice}
              totalFromPrice={totalFromPrice}
              totalToPrice={totalToPrice}
              isOpen={isOpen}
              open={open}
            />
          ) : null}

          {activeTab === 1 ? (
            <RelayDeposit
              selectedFrom={selectedFrom}
              selectedTo={selectedTo}
              setFromPrice={setFromPrice}
              setIsOpen={setIsOpen}
              setOpen={setOpen}
              setToPrice={setToPrice}
              totalFromPrice={totalFromPrice}
              totalToPrice={totalToPrice}
              isOpen={isOpen}
              open={open}
            />
          ) : null}

          {/* Price Compare card */}
          {isConnected ? (
            <button className="p-3 rounded-md flex justify-between items-center w-full bg-[#FCFCFC]">
              <p className="text-xs lg:text-sm text-gray-500 font-medium">
                Route
              </p>

              <div className="flex justify-start items-center gap-2 whitespace-nowrap">
                <Image
                  src={light}
                  alt="light"
                  width={16}
                  height={16}
                  className="rounded-sm"
                />
                <p className="text-xs lg:text-sm">Realy (instant)</p>
                <IoIosArrowDown className="ease transition-all duration-200 text-gray-500" />
              </div>
            </button>
          ) : null}

          {isConnected ? (
            <button
              onClick={() => drain()}
              disabled={fromPrice < 1 || toPrice < 1 || !isConnected}
              className="w-full bg-[#6E56CF] text-white h-10 font-semibold rounded-lg hover:opacity-80 font-inter disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed"
            >
              Enter an amount
            </button>
          ) : (
            <WagmiConnectButton
              title="Connect"
              styles="w-full bg-[#6E56CF] text-white h-10 font-semibold text-[16px] rounded-lg hover:opacity-80 font-inter"
            />
          )}

          {/* Arrow down */}
          {/* <div className="absolute bg-[#F2F2FF] top-[42%] left-[45%] p-1 rounded-lg">
          <div className="p-2 rounded-lg bg-white">
            <FaArrowDown size={17} color="#666" />
          </div>
        </div> */}
        </div>

        <CryptoListModal
          onSelect={handleFromChange}
          onClose={() => setOpen(false)}
          open={open}
        />
        <CryptoListModal
          onSelect={handleToChange}
          onClose={() => setIsOpen(false)}
          open={isOpen}
        />
      </section>
    </>
  );
};

export default Page;
