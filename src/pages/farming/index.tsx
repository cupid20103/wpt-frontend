//@import components
import ItemGroup from "components/ItemGroup";
//@import styles
import { FarmingContainer } from "./farming.styled";

const Farming = () => {
  return (
    <FarmingContainer>
      <ItemGroup
        isStaking={false}
        title={"EARN WPT / STAKE WPT"}
        subtitle={"90 DAYS STAKING"}
        apr={14.36}
        oneTitle={"View Contract"}
        oneLink={"/"}
        deposit={0}
        withdraw={0}
        twoTitle={"See pair info"}
        twoLink={"/"}
        staked={"223, 211.56"}
        sPrice={"3, 100.43"}
        earned={"223, 211.56"}
        ePrice={"3, 100.43"}
        reflected={"223, 211.56"}
        rPrice={"3, 100.43"}
      />
    </FarmingContainer>
  );
};

export default Farming;
