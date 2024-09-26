"use client";

import CryptoListModal from "@/app/components/modals/CryptoListModal";
// import WagmiConnectButton from "@/app/components/WagmiConnectButton";
import { useEffect, useRef, useState } from "react";
import ethereum from "../../images/ecosystem/ethereum.svg";
import zorb from "../../images/zora.png";
import zora_icon from "../../images/zorb.svg";
// import ethereum_blue from "../../images/ethereum-blue.png";
import Image from "next/image";
// import { UseWallet } from "@/app/components/useWallet";
import RelayMobileNav from "../components/global/navbar/RelayMobileNav";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import ZoraTokenListModal from "../components/modals/ZoraTokenListModal";
import SwapField from "../components/superbridge/SwapField";
import SuperBridgeNav from "../components/global/navbar/SuperBridgeNav";
import { BsArrowRight } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import Activity from "../components/superbridge/Activity";

const Page = () => {
  // const { drain } = UseWallet();
  const [isZoraTokenModal, setIsZoraTokenModal] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFrom, setSelectedFrom] = useState({
    name: "Ethereum",
    imgSrc: ethereum,
    code: "ETH",
    price: 18,
    chainId: 1,
    decimals: 18,
    destinationCurrency: "0x0000000000000000000000000000000000000000",
    address: "0x0000000000000000000000000000000000000000",
    amount: 18,
  });
  const [selectedTo, setSelectedTo] = useState({
    name: "Ethereum",
    imgSrc: ethereum,
    code: "ETH",
    chainId: 1,
    price: "0",
    destinationCurrency: "0x0000000000000000000000000000000000000000",
    address: "0x0000000000000000000000000000000000000000",
  });
  const [isVisible, setIsVisible] = useState(false);
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
    // Trigger the card to appear on mount
    setIsVisible(true);
  }, []);

  const handleRemoveCard = () => {
    // Trigger the card to disappear
    setIsVisible(false);
    // Remove the card after the animation completes
    setTimeout(() => {
      // alert("Card removed!");
    }, 500); // 500ms matches the unmount animation duration
  };

  return (
    <>
      <SuperBridgeNav transparentBg={true} setOpen={setIsNavOpen} />
      <RelayMobileNav open={isNavOpen} setOpen={setIsNavOpen} />
      <div className="superbridge-bg bg-no-repeat bg-cover"></div>
      <div className="bg-gradient-to-t from-[#006FFE] to-violet-500/0 dark:from-[#006FFE] dark:to-[#006FFE] inset-0 z-0 fixed mix-blend-plus-lighter"></div>

      <div className="w-full flex flex-col justify-center items-center font-inter px-5 h-screen overflow-y-hidden">
        <div
          className={`
         ${
           isVisible
             ? "translate-y-96 animate-bounce-in"
             : "translate-y-[10000px]"
         } space-y-2 max-w-[400px] w-full relative rounded-[30px] shadow-tab_box px-4 py-6 bg-white ease-in-out duration-300 transition-transform`}
        >
          <div className="pb-2 flex justify-between items-center">
            <Image src={zorb} height={130} width={130} alt="zora logo" />
            <div className="bg-[#F1F3F5] rounded-full grid grid-cols-2 p-1 text-xs font-bold">
              <div
                role="button"
                onClick={() => setActiveTab(1)}
                className={`${
                  activeTab === 1
                    ? "bg-[#11181C] text-white"
                    : "bg-transparent text-gray-500"
                } ease transition-background duration-300 w-full h-8 text-center flex justify-center items-center rounded-full px-1.5`}
              >
                Deposit
              </div>
              <div
                role="button"
                onClick={() => setActiveTab(2)}
                className={`${
                  activeTab === 2
                    ? "bg-[#11181C] text-white"
                    : "bg-transparent text-gray-500"
                } ease transition-background duration-300 w-full h-8 text-center flex justify-center items-center rounded-full px-1.5`}
              >
                Withdraw
              </div>
            </div>
          </div>

          {/*  */}
          <div
            className={`${
              activeTab === 1 ? "flex-row" : "flex-row-reverse"
            } items-center justify-between flex rounded-xl border p-3`}
          >
            <div className="flex justify-start items-center gap-2">
              <Image
                src={selectedFrom.imgSrc}
                alt={selectedFrom.name}
                height={35}
                width={35}
                // className=""
              />
              <div className="flex flex-col text-sm font-bold">
                <p className="text-gray-600 text-xs">
                  {activeTab === 1 ? "From" : "To"}
                </p>
                <p className="">
                  {activeTab === 1 ? selectedFrom.code : "Zora"}
                </p>
              </div>
            </div>

            <BsArrowRight size={25} color="#666" />

            <div className={`flex justify-start items-center gap-2 mt-2`}>
              <Image
                src={zora_icon}
                alt={selectedFrom.name}
                height={35}
                width={35}
              />
              <div className="flex flex-col text-sm font-bold">
                <p className="text-gray-600 text-xs">
                  {activeTab === 1 ? "To" : "From"}
                </p>
                <p>{activeTab === 1 ? "Zora" : selectedFrom.code}</p>
              </div>
            </div>
          </div>

          <SwapField
            activeTab={activeTab}
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
            fromPrice={fromPrice}
            setIsZoraTokenModal={setIsZoraTokenModal}
          />
        </div>

        <Activity isVisible={isVisible} onClose={() => setIsVisible(true)} />

        {/* Sticky footer */}
        <div className="fixed bottom-5 right-0 left-0 flex justify-between items-center px-5">
          <div
            role="button"
            onClick={() => handleRemoveCard()}
            className={`${
              !isVisible ? "invisible" : ""
            } px-2.5 py-1.5 bg-white flex justify-between items-center rounded-full gap-1 hover:bg-gray-100 ease transition-all`}
          >
            <p className="font-bold">Activity</p>

            <IoIosArrowDown
              className={`${
                isVisible ? "rotate-180" : ""
              } ease transition-all duration-200 text-gray-500`}
            />
          </div>
        </div>

        <ZoraTokenListModal
          onSelect={handleToChange}
          onClose={() => setIsZoraTokenModal(false)}
          open={isZoraTokenModal}
        />
        <CryptoListModal
          onSelect={handleFromChange}
          onClose={() => setIsOpen(false)}
          open={isOpen}
        />
        {/* <CryptoListModal
          onSelect={handleToChange}
          onClose={() => setIsOpen(false)}
          open={isOpen}
        /> */}
      </div>
    </>
  );
};

export default Page;
