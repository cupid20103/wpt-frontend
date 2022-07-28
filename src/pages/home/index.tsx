//@import components
import Item from "components/Item";
//@import styles
import { HomeContainer } from "./home.styled";
//@import resources
import { contents } from "./data";

const Home = () => {
  return (
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
  );
};

export default Home;
