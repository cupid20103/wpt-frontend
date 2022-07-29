import { useLocation } from "react-router-dom";
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
  const location = useLocation();

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Wallet />
        <HeaderContent>
          <HeaderTitle>
            {location.pathname === "/"
              ? "Home"
              : location.pathname.slice(1).charAt(0).toUpperCase() +
                location.pathname.slice(2)}
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
