// @import contexts
import { useEthContext } from "../../contexts/EthereumContext";
//@import styles
import { WalletContainer, WalletStatus } from "./wallet.styled";
//@import resources
import KeyOpen from "assets/images/keyopen.svg";
import KeyClose from "assets/images/keyclose.svg";

const Wallet = () => {
  const { provider, currentAcc }: any = useEthContext();

  const handleConnectWallet = async () => {
    if (provider) {
      await provider.request({ method: `eth_requestAccounts` });
      try {
        await provider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x38" }],
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
            ? `${currentAcc.substring(0, 6)}...${currentAcc.substring(38)}`
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
