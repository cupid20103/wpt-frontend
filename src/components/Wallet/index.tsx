import { useEffect, useState } from "react";
// @import contexts
import { useEthContext } from "contexts/EthereumContext/EthereumContext";
//@import styles
import { WalletContainer, WalletStatus } from "./wallet.styled";
//@import resources
import { getScreenWidth } from "utils/getScreenWidth";
import KeyOpen from "assets/images/keyopen.svg";
import KeyClose from "assets/images/keyclose.svg";

const Wallet = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { provider, currentAcc }: any = useEthContext();

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(getScreenWidth(768));
    });
    setIsMobile(getScreenWidth(768));
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  const handleConnectWallet = async () => {
    if (provider) {
      await provider.request({ method: `eth_requestAccounts` });
      try {
        await provider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x1" }],
        });
      } catch (switchError) {
        console.log("Failed to switch to the network");
      }
    }
  };

  return (
    <WalletContainer color={currentAcc}>
      {provider ? (
        <p onClick={handleConnectWallet}>
          {currentAcc
            ? isMobile
              ? "Connected"
              : `${currentAcc.substring(0, 6)}...${currentAcc.substring(38)}`
            : "Connect Wallet"}
        </p>
      ) : (
        <a
          href="https://metamask.io/download/"
          target={"_blank"}
          rel="noreferrer"
        >
          {"Connect Wallet"}
        </a>
      )}
      <WalletStatus src={currentAcc ? KeyOpen : KeyClose} />
    </WalletContainer>
  );
};

export default Wallet;
