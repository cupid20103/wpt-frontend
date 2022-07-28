import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Web3 from "web3";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// @import contexts
import { EthereumContext } from "contexts/EthereumContext";
// @import layouts
const Layout = React.lazy(() => import("layouts"));
// @import pages
const Home = React.lazy(() => import("pages/home"));
const Staking = React.lazy(() => import("pages/staking"));
const Farming = React.lazy(() => import("pages/farming"));

const App = () => {
  const [provider, setProvider] = useState<any>(null);
  const [web3, setWeb3] = useState<any>(null);
  const [accounts, setAccounts] = useState<any>([]);
  const [currentAcc, setCurrentAcc] = useState("");

  useEffect(() => {
    const { ethereum }: any = window;

    if (ethereum && ethereum.isMetaMask) {
      setProvider(ethereum);
      setWeb3(new Web3(ethereum));
      ethereum.on("accountsChanged", (accs: any) => {
        setAccounts(accs);
        setCurrentAcc(accs[0]);
      });
      ethereum.on("chainChanged", (chainId: String) => {
        if (chainId === "0x38") {
          toast("BSC mainnet connected successfully");
        } else {
          toast.error("Please connect to BSC mainnet", {
            theme: "dark",
          });
        }
      });
    } else {
      toast.error("Please install Metamask wallet in this browser", {
        theme: "dark",
      });
    }
  }, []);

  useEffect(() => {
    const setCurrentlyConnectedAccount = async () => {
      let accounts = await web3.eth.getAccounts();
      if (accounts && accounts.length > 0) {
        setCurrentAcc(accounts[0]);
      }
    };
    if (web3) {
      setCurrentlyConnectedAccount();
    }
  }, [web3]);

  return (
    <>
      <EthereumContext.Provider
        value={{ provider, accounts, web3, currentAcc }}
      >
        <Suspense>
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="staking" element={<Staking />} />
                <Route path="farming" element={<Farming />} />
              </Route>
            </Routes>
          </Router>
        </Suspense>
      </EthereumContext.Provider>
      <ToastContainer />
    </>
  );
};

export default App;
