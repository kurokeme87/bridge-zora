"use client";

const WalletDetailsNav = () => {
  return (
    <nav className="flex justify-center items-center gap-10 lg:gap-20 w-full pt-3 text-sm font-medium flex-wrap">
      <div className="">
        <p className="text-gray-400">CHAIN NAME</p>
        <p className="text-lg">Zora</p>
      </div>

      <div className="">
        <p className="text-gray-400">CHAIN ID</p>
        <p className="text-lg">7777777</p>
      </div>

      <div className="">
        <p className="text-gray-400">LAST BLOCK</p>
        <p className="text-lg">19813245</p>
      </div>

      <div className="">
        <p className="text-gray-400">LAST L1 BLOCK</p>
        <p className="text-lg">20749133</p>
      </div>

      <div className="">
        <p className="text-gray-400">L1 GAS PRICE</p>
        <p className="text-lg">2.27</p>
      </div>

      <div className="">
        <p className="text-gray-400">NETWORK TVL</p>
        <p className="text-lg">7698.90</p>
      </div>
    </nav>
  );
};

export default WalletDetailsNav;
