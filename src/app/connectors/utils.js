import { Web3ReactHooks } from "@web3-react/core";

// export type Web3Connector = [Connector, Web3ReactHooks]

export function toWeb3Connector([connector, hooks]) {
  return [connector, hooks];
}
