import { useEffect, useState } from "react";
import axios from "axios";
//@import contexts
import { useEthContext } from "contexts/Ethereum/EthereumContext";
//@import components
import Item from "components/Item";
import Detail from "components/Detail";
//@import styles
import { HomeContainer, HomeWrapper } from "./home.styled";
//@import resources
import {
  WPTInvestingCorpTokenAddress,
  WPTInvestingCorpTokenABI,
} from "contract/WPTInvestingCorpToken";
import { getTokenAmount } from "utils/getTokenAmount";
import balanceImg from "assets/images/balance.svg";
import priceImg from "assets/images/price.png";
import marketImg from "assets/images/market.png";
import holdersImg from "assets/images/holders.svg";
import volumeImg from "assets/images/volume.svg";

require("dotenv").config();
const { REACT_APP_SERVER_URI } = process.env;

const Home = () => {
  const { currentAcc, web3 }: any = useEthContext();
  const [percent, setPercent] = useState(0);
  const [balance, setBalance] = useState(0);
  // const [holder, setHolder] = useState(0);
  const [price, setPrice] = useState(0);
  const [volume, setVolume] = useState(0);
  const [marketcap, setMarketcap] = useState(0);

  useEffect(() => {
    if (web3 && currentAcc) {
      const contract = new web3.eth.Contract(
        WPTInvestingCorpTokenABI,
        WPTInvestingCorpTokenAddress
      );

      const interval = setInterval(async () => {
        await contract.methods
          .balanceOf(currentAcc)
          .call()
          .then((res: number) => {
            setBalance(getTokenAmount(res));
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
        const quoteData = res.data.quote.USD;
        setPercent(quoteData?.volume_change_24h?.toFixed(2));
        setPrice(quoteData?.price?.toFixed(2));
        setVolume(quoteData?.volume_24h?.toFixed(2));
        setMarketcap(res?.data?.self_reported_market_cap?.toFixed(2));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <HomeWrapper>
      <HomeContainer>
        <Item
          image={balanceImg}
          title={"Account Balance"}
          isHolders={false}
          content={balance}
          percent={percent}
        />
        <Item
          image={priceImg}
          title={"WPT Price"}
          isHolders={false}
          content={price}
        />
        <Item
          image={marketImg}
          title={"Market Cap"}
          isHolders={false}
          content={marketcap}
        />
        <Item
          image={holdersImg}
          title={"Holders"}
          isHolders={true}
          content={304}
        />
        <Item
          image={volumeImg}
          title={"Daily Volume"}
          isHolders={false}
          content={volume}
        />
      </HomeContainer>
      <Detail />
    </HomeWrapper>
  );
};

export default Home;
