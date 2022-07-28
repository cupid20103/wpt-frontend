//@import components
import Wallet from "components/Wallet";
//@import styles
import {
  HeaderContent,
  HeaderContainer,
  HeaderTitle,
  HeaderWrapper,
  Links,
} from "./header.styled";
//@import resources
import { links } from "./data";
import human from "assets/images/home.svg";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Wallet />
        <HeaderContent>
          <HeaderTitle>
            {"Home"}
            <img src={human} alt={"human"} />
          </HeaderTitle>
          <Links>
            {links.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target={"_blank"}
                rel={"noreferrer"}
              >
                <img src={item.image} alt={"social"} />
              </a>
            ))}
          </Links>
        </HeaderContent>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
