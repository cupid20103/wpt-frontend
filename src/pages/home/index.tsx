//@import components
import Item from "components/Item";
import Detail from "components/Detail";
//@import styles
import { HomeContainer, HomeWrapper } from "./home.styled";
//@import resources
import { contents } from "./data";

const Home = () => {
  return (
    <HomeWrapper>
      <HomeContainer>
        {contents.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </HomeContainer>
      <Detail />
    </HomeWrapper>
  );
};

export default Home;
