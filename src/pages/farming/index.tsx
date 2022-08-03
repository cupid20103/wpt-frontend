//@import components
import Detail from "components/Detail";
import ItemGroup from "components/ItemGroup";
//@import styles
import { FarmingContainer, FarmingWrapper } from "./farming.styled";
//@import resources
import { contents } from "./data";

const Farming = () => {
  return (
    <FarmingWrapper>
      <FarmingContainer>
        {contents.map((item, index) => (
          <ItemGroup key={index} {...item} />
        ))}
      </FarmingContainer>
      <Detail />
    </FarmingWrapper>
  );
};

export default Farming;
