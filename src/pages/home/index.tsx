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
import holdersImg from "assets/images/holders.svg";
import volumeImg from "assets/images/volume.svg";

require("dotenv").config();
const { REACT_APP_CMC_API_KEY, REACT_APP_ESCAN_API_KEY }: any = process.env;

const Home = () => {
  const { currentAcc, web3 }: any = useEthContext();
  const [balance, setBalance] = useState(0);
  // const [holder, setHolder] = useState(0);
  const [price, setPrice] = useState(0);
  const [volume, setVolume] = useState(0);
  // const [crypto, setCrypto] = useState([]);

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
      .get(
        "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?symbol='WPT'",
        {
          headers: {
            "X-CMC_PRO_API_KEY": "3fe25879-b890-4f32-93f6-fac1c7fad2ed",
          },
        }
      )
      .then((res) => {
        console.log(res);
      });
    // await axios
    //   .get(
    //     "https://api.coingecko.com/api/v3/coins/ethereum/contract/0x4fd51cb87ffefdf1711112b5bd8ab682e54988ea"
    //   )
    //   .then((res) => {
    //     console.log(res.data.market_data);
    //     setPrice(res.data.market_data.current_price.usd);
    //     setVolume(res.data.market_data.total_volume.usd);
    //   });
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
        {/* <Item
          image={market}
          title={"Market Cap"}
          isBalance={false}
          isHolders={false}
          content={crypto.quote.USD.market_cap}
        /> */}
        {/* <Item
          image={holders}
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
