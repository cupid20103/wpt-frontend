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
  HeaderBottom,
} from "./header.styled";
//@import resources
import { links } from "./data";
import home from "assets/images/home.svg";
import staking from "assets/images/staking.png";
import farming from "assets/images/farming.png";

const Header = () => {
  const location = useLocation();

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Wallet />
        <HeaderContent>
          <HeaderTitle>
            <p>
              {location.pathname === "/"
                ? "Home"
                : location.pathname.slice(1).charAt(0).toUpperCase() +
                  location.pathname.slice(2)}
            </p>
            {location.pathname === "/" && <img src={home} alt={"home"} />}
            {location.pathname === "/staking" && (
              <img src={staking} alt={"staking"} />
            )}
            {location.pathname === "/farming" && (
              <img src={farming} alt={"farming"} />
            )}
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
      <HeaderBottom />
    </HeaderWrapper>
  );
};

export default Header;
