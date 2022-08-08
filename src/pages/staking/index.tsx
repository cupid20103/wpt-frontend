import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
//@import components
import Detail from "components/Detail";
import ItemGroup from "components/ItemGroup";
//@import styles
import { StakingContainer, StakingWrapper } from "./staking.styled";
//@import contexts
import { useEthContext } from "contexts/Ethereum/EthereumContext";
//@import resources
import {
  BrewlabsLockupAddress,
  BrewlabsLockupABI,
} from "contract/BrewlabsLockup";
import { getTokenAmount } from "utils/getTokenAmount";
import { contents } from "./data";

require("dotenv").config();
const { REACT_APP_SERVER_URI } = process.env;

const Staking = () => {
  const { provider, currentAcc, web3 }: any = useEthContext();
  const [price, setPrice] = useState(0);
  const [data, setData] = useState([]);
  const temp: any = contents;

  useEffect(() => {
    axios
      .get(REACT_APP_SERVER_URI + "/api/getInfo")
      .then((res) => {
        const quoteData = res.data.quote.USD;
        setPrice(quoteData?.price?.toFixed(2));
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const contract = new web3.eth.Contract(
        BrewlabsLockupABI,
        BrewlabsLockupAddress
      );
      for (let i = 0; i < contents.length; i++) {
        await contract.methods
          .lockups(i)
          .call()
          .then((res: any) => {
            temp[i].stakedData = res;
          });
        await contract.methods
          .userInfo(i, currentAcc)
          .call()
          .then((res: any) => {
            temp[i].earndData = res;
          });
      }
      setData(temp);
    };
    if (web3 && currentAcc && Number(provider.chainId) === 1) {
      fetchData();
    } else {
      toast.error("Please connect Metamask and select Ethereum mainnet!", {
        theme: "dark",
      });
    }
  }, [provider, web3, temp, currentAcc]);

  const compound = async (arg: number) => {
    const contract = new web3.eth.Contract(
      BrewlabsLockupABI,
      BrewlabsLockupAddress
    );
    const fee = getTokenAmount(await contract.methods.performanceFee().call());
    await contract.methods
      .compoundReward(fee, arg)
      .send({ from: currentAcc })
      .on("receipt", function (receipt: any) {
        toast("Success!");
      })
      .on("error", function (error: any) {
        toast.error("Error!", {
          theme: "dark",
        });
      });
  };

  const addToken = async () => {
    const tokenAddress = "0x4fd51cb87ffefdf1711112b5bd8ab682e54988ea";
    const tokenSymbol = "WPT";
    const tokenDecimals = 18;
    const tokenImage =
      "https://s2.coinmarketcap.com/static/img/coins/64x64/20946.png";
    try {
      const wasAdded = await provider.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: tokenAddress,
            symbol: tokenSymbol,
            decimals: tokenDecimals,
            image: tokenImage,
          },
        },
      });
      if (wasAdded) {
        toast("Success!");
      } else {
        toast.error("Error!", {
          theme: "dark",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StakingWrapper>
      <StakingContainer>
        {data.map((item: any, index: number) => (
          <ItemGroup
            key={index}
            subtitle={item.stakedData.duration}
            deposit={item.stakedData.depositFee}
            withdraw={item.stakedData.withdrawFee}
            staked={getTokenAmount(item.stakedData.totalStaked)}
            sPrice={getTokenAmount(item.stakedData.totalStaked * price)}
            earned={getTokenAmount(item.earndData.amount)}
            ePrice={getTokenAmount(item.earndData.amount * price)}
            compound={() => compound(index)}
            addToken={() => addToken()}
            {...item}
          />
        ))}
      </StakingContainer>
      <Detail />
    </StakingWrapper>
  );
};

export default Staking;
