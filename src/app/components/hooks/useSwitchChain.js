import { useAccount, useSwitchChain } from "wagmi";
import { toast } from "react-toastify";

export const switchChain = async (chainId, chainName) => {
  const { chain } = useAccount();
  const { switchChainAsync } = useSwitchChain();

  const hexChainId = `0x${chainId.toString(16)}`; // Converts to "0x89"

  if (chain?.id !== chainId) {
    try {
      await switchChainAsync(chainId);
      toast.success("Successfully switched network!");
    } catch (error) {
      if (error.name === "SwitchChainNotSupportedError") {
        // If chain switching isn't supported, add the chain
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: hexChainId, // Replace with your chain ID in hex format
                chainName,
                rpcUrls: ["https://rpc.yourchain.com"],
                nativeCurrency: {
                  name: "Your Chain Currency",
                  symbol: "TOKEN", // Currency symbol
                  decimals: 18,
                },
                blockExplorerUrls: ["https://explorer.yourchain.com"],
              },
            ],
          });
        } catch (addError) {
          console.error("Error adding the chain:", addError);
          toast.error("Failed to add chain. Please add it manually.");
        }
      } else {
        console.error("Error switching chain:", error);
        toast.error("Failed to switch chain.");
      }
    }
  }
};
