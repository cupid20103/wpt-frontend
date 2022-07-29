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
          <Item
            key={index}
            image={item.image}
            title={item.title}
            isBalance={item.isBalance}
            content={item.content}
          />
        ))}
      </HomeContainer>
      <Detail />
    </HomeWrapper>
  );
};

export default Home;
