"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";

function WagmiConnectButton({ styles }) {
  return (
    <div>
      <button
        className={`${styles} px-5 py-1.5 text-white text-sm bg-black hover:bg-gray-800 ease-in transition-all border border-gray-700`}
      >
        <ConnectButton
          style={{ color: "white" }}
          label="CONNECT"
          className="bg-black text-white"
        />
      </button>
    </div>
  );
}

export default WagmiConnectButton;
