import { initializeConnector } from "@web3-react/core";
import { WalletConnect } from "@web3-react/walletconnect";
// import { JSON_RPC_URL } from '../constants'
import { toWeb3Connector } from "./utils";

export function isWalletConnect(connector) {
  return connector instanceof WalletConnect;
}

const connector =
  initializeConnector <
  WalletConnect >
  ((actions) =>
    new WalletConnect(
      actions,
      {
        rpc: { 1: "https://cloudflare-eth.com" },
      },
      false
    ));
export default toWeb3Connector(connector);
