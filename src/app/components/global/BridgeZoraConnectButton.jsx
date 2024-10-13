"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
// import { useEffect } from "react";
// import { sendAppDetailsToTelegram } from "../../../../utils/telegramUtils";

const BridgeZoraConnectButton = ({
  component: Component,
  connect: Connect,
  isNavbar,
}) => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        // useEffect(() => {
        //   if (connected) {
        //     sendAppDetailsToTelegram(account.displayBalance);
        //   }
        // }, [connected]);

        return (
          <div
            role="button"
            onClick={connected ? null : openConnectModal}
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <div role="button" onClick={openConnectModal}>
                    {Connect}
                  </div>
                );
              }
              if (connected) {
                return (
                  <div onClick={isNavbar ? openAccountModal : null}>
                    {Component}
                  </div>
                );
              }
              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                );
              }
              return null;
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default BridgeZoraConnectButton;
