//@import components
import ItemGroup from "components/ItemGroup";
//@import styles
import { StakingContainer } from "./staking.styled";

const Staking = () => {
  return (
    <StakingContainer>
      <ItemGroup
        isStaking={true}
        title={"EARN WPT / STAKE WPT"}
        subtitle={"90 DAYS STAKING"}
        apr={10.13}
        oneTitle={"View project site"}
        oneLink={"/"}
        deposit={2}
        withdraw={0}
        twoTitle={"Add to Metamask"}
        twoLink={"/"}
        staked={"223, 211.56"}
        sPrice={"3, 100.43"}
        earned={"223, 211.56"}
        ePrice={"3, 100.43"}
        reflected={"223, 211.56"}
        rPrice={"3, 100.43"}
      />
      <ItemGroup
        isStaking={true}
        title={"EARN WPT / STAKE WPT"}
        subtitle={"90 DAYS STAKING"}
        apr={14.36}
        oneTitle={"View project site"}
        oneLink={"/"}
        deposit={0}
        withdraw={0}
        twoTitle={"Add to Metamask"}
        twoLink={"/"}
        staked={"223, 211.56"}
        sPrice={"3, 100.43"}
        earned={"223, 211.56"}
        ePrice={"3, 100.43"}
        reflected={"223, 211.56"}
        rPrice={"3, 100.43"}
      />
    </StakingContainer>
  );
};

export default Staking;