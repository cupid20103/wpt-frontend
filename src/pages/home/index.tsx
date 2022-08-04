import { useEffect, useState } from "react";
import axios from "axios";
//@import components
import Item from "components/Item";
import Detail from "components/Detail";
//@import styles
import { HomeContainer, HomeWrapper } from "./home.styled";
//@import resources
import { WPTAddress } from "contract/address";
import { WPTContractABI } from "contract/abi";
import { useEthContext } from "contexts/EthereumContext/EthereumContext";
import balanceImg from "assets/images/balance.svg";
import priceImg from "assets/images/price.png";
import marketImg from "assets/images/market.png";
// import holdersImg from "assets/images/holders.svg";
import volumeImg from "assets/images/volume.svg";

require("dotenv").config();
const { REACT_APP_SERVER_URI } = process.env;

const Home = () => {
  const { currentAcc, web3 }: any = useEthContext();
  const [balance, setBalance] = useState(0);
  // const [holder, setHolder] = useState(304);
  const [price, setPrice] = useState(0);
  const [volume, setVolume] = useState(0);
  const [marketcap, setMarketcap] = useState(0);

  useEffect(() => {
    const contract = new web3.eth.Contract(WPTContractABI, WPTAddress);

    if (currentAcc) {
      const interval = setInterval(async () => {
        await contract.methods
          .balanceOf(currentAcc)
          .call()
          .then((res: number) => {
            setBalance(Number((res / 10 ** 18).toFixed(2)));
          });
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    } else {
      setBalance(0);
    }
  }, [web3, currentAcc]);

  useEffect(() => {
    axios
      .get(REACT_APP_SERVER_URI + "/api/getInfo")
      .then((res) => {
        setPrice(res.data.quote.USD.price.toFixed(2));
        setVolume(res.data.quote.USD.volume_change_24h.toFixed(2));
        setMarketcap(res.data.self_reported_market_cap.toFixed(2));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <HomeWrapper>
      <HomeContainer>
        <Item
          image={balanceImg}
          title={"Account Balance"}
          isBalance={true}
          isHolders={false}
          content={balance}
        />
        <Item
          image={priceImg}
          title={"WPT Price"}
          isBalance={false}
          isHolders={false}
          content={price}
        />
        <Item
          image={marketImg}
          title={"Market Cap"}
          isBalance={false}
          isHolders={false}
          content={marketcap}
        />
        {/* <Item
          image={holdersImg}
          title={"Holders"}
          isBalance={false}
          isHolders={true}
          content={holder}
        /> */}
        <Item
          image={volumeImg}
          title={"Daily Volume"}
          isBalance={false}
          isHolders={false}
          content={volume}
        />
      </HomeContainer>
      <Detail />
    </HomeWrapper>
  );
};

export default Home;
