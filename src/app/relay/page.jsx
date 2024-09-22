"use client";

import CryptoListModal from "@/app/components/modals/CryptoListModal";
import { useState } from "react";
import ethereum from "../../images/ecosystem/ethereum.svg";
import zorb from "../../images/zora.png";
import Image from "next/image";
import RelayDeposit from "../components/Deposit";
import RelayNav from "../components/global/navbar/RelayNav";
import RelayMobileNav from "../components/global/navbar/RelayMobileNav";
import ZoraTokenListModal from "../components/modals/ZoraTokenListModal";

const Page = () => {
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
  const [totalFromPrice, setTotalFromPrice] = useState(0);
  const [totalToPrice, setTotalToPrice] = useState(0);
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);
  const [destinationCurrency, setDestinationCurrency] = useState(
    "0x0000000000000000000000000000000000000000"
  );

  const handleFromChange = (value) => {
    setSelectedFrom(value);
    setOpen(false);
  };

  const handleToChange = (value) => {
    setSelectedTo(value);
    setIsOpen(false);
  };

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

          {/* {activeTab === 1 ? ( */}
          <RelayDeposit
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
          {/* ) : null} */}

          {/* {activeTab === 2 ? (
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
              setIsZoraTokenModal={setIsZoraTokenModal}
              setDestinationCurrency={setDestinationCurrency}
              destinationCurrency={destinationCurrency}
              originCurrency={originCurrency}
              setOriginCurency={setOriginCurency}
            />
          ) : // <SwapWidget />
          null} */}
        </div>

        <ZoraTokenListModal
          onSelect={handleToChange}
          onClose={() => setIsZoraTokenModal(false)}
          open={isZoraTokenModal}
        />
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
