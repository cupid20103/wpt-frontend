import { ReactNode, useEffect, useState } from "react";
import Web3 from "web3";
import { toast } from "react-toastify";
// @import contexts
import { EthereumContext } from "./EthereumContext";

interface Props {
  children: ReactNode;
}

const EthereumContextProvider = (props: Props) => {
  const [provider, setProvider] = useState<any>(null);
  const [currentAcc, setCurrentAcc] = useState("");
  const [web3, setWeb3] = useState<any>(null);

  useEffect(() => {
    const { ethereum }: any = window;

    if (ethereum && ethereum.isMetaMask) {
      setProvider(ethereum);
      setWeb3(new Web3(ethereum));
      ethereum.on("accountsChanged", (accs: any) => {
        setCurrentAcc(accs[0]);
      });
      ethereum.on("chainChanged", (chainId: string) => {
        if (chainId === "0x1") {
          toast("Ethereum mainnet connected successfully!");
        } else {
          toast.error("Please connect to Ethereum mainnet", {
            theme: "dark",
          });
        }
      });
    } else {
      toast.error("Please install Metamask wallet in this browser!", {
        theme: "dark",
      });
    }
  }, []);

  useEffect(() => {
    const setCurrentlyConnectedAccount = async () => {
      const accs = await web3.eth.getAccounts();
      if (accs && accs.length > 0) {
        setCurrentAcc(accs[0]);
      }
    };
    if (web3) {
      setCurrentlyConnectedAccount();
    }
  }, [web3]);

  return (
    <EthereumContext.Provider value={{ provider, currentAcc, web3 }}>
      {props.children}
    </EthereumContext.Provider>
  );
};

export default EthereumContextProvider;
