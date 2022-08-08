import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
//@import components
import Detail from "components/Detail";
import ItemGroup from "components/ItemGroup";
//@import styles
import { FarmingContainer, FarmingWrapper } from "./farming.styled";
//@import contexts
import { useEthContext } from "contexts/Ethereum/EthereumContext";
//@import resources
import { BrewlabsFarmAddress, BrewlabsFarmABI } from "contract/BrewlabsFarm";
import { getTokenAmount } from "utils/getTokenAmount";

require("dotenv").config();
const { REACT_APP_SERVER_URI } = process.env;

const Farming = () => {
  const { provider, currentAcc, web3 }: any = useEthContext();
  const [price, setPrice] = useState(0);
  const [data, setData] = useState([]);

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
        BrewlabsFarmABI,
        BrewlabsFarmAddress
      );
      const length = await contract.methods.poolLength().call();
      const temp: any = [];
      for (let i = 0; i < length; i++) {
        const el = { stakedData: null, earndData: null };
        await contract.methods
          .poolInfo(i)
          .call()
          .then((res: any) => {
            el.stakedData = res;
          });
        await contract.methods
          .userInfo(i, currentAcc)
          .call()
          .then((res: any) => {
            el.earndData = res;
          });
        temp.push(el);
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
  }, [provider, web3, currentAcc]);

  return (
    <FarmingWrapper>
      <FarmingContainer>
        {data.map((item: any, index) => (
          <ItemGroup
            key={index}
            isStaking={false}
            title={"EARN BUSD/ FARM WPT-ETH LP"}
            subtitle={10344.45}
            apr={108.13}
            deposit={item.stakedData.depositFee}
            withdraw={item.stakedData.withdrawFee}
            oneTitle={"View Contract"}
            oneLink={"/"}
            twoTitle={"See pair info"}
            twoLink={"/"}
            staked={getTokenAmount(item.stakedData.totalStaked)}
            sPrice={getTokenAmount(item.stakedData.totalStaked * price)}
            earned={getTokenAmount(item.earndData.amount)}
            ePrice={getTokenAmount(item.earndData.amount * price)}
          />
        ))}
      </FarmingContainer>
      <Detail />
    </FarmingWrapper>
  );
};

export default Farming;
