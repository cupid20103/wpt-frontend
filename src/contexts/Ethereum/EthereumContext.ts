import { createContext, useContext } from "react";
import Web3 from "web3";

export const EthereumContext = createContext({
  provider: [],
  currentAcc: "",
  web3: Web3 ? Web3 : null,
});

export const useEthContext = () => useContext(EthereumContext);
