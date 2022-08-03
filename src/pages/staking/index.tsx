//@import components
import Detail from "components/Detail";
import ItemGroup from "components/ItemGroup";
//@import styles
import { StakingContainer, StakingWrapper } from "./staking.styled";
//@import resources
import { contents } from "./data";

const Staking = () => {
  return (
    <StakingWrapper>
      <StakingContainer>
        {contents.map((item, index) => (
          <ItemGroup key={index} {...item} />
        ))}
      </StakingContainer>
      <Detail />
    </StakingWrapper>
  );
};

export default Staking;
