// "use client";

import WalletDetailsNav from "../components/custom/WalletDetailsNav";
import ParticleConnectButton from "../components/global/ConnectButton";

const Transactions = () => {
  return (
    <section className="w-full h-full">
      <h1 className="text-xl md:text-3xl font-bold px-5 py-7 w-full text-center border-b border-gray-400">
        TRANSACTIONS
      </h1>
      <div className="w-full border-b px-5 pt-10 pb-4 flex flex-col justify-center items-center border-gray-400">
        <h1 className="text-xl md:text-3xl font-bold text-center  uppercase w-full max-w-2xl">
          CONNECT YOUR WALLET NOW to view your transaction
        </h1>

        <div className="mt-10">
          <ParticleConnectButton />
        </div>
      </div>

      <WalletDetailsNav />
    </section>
  );
};

export default Transactions;
