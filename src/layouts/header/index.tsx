import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
//@import components
import Wallet from "components/Wallet";
import NavItem from "components/NavItem";
import SidebarItem from "components/SidebarItem";
//@import styles
import {
  HeaderContent,
  HeaderContainer,
  HeaderTitle,
  HeaderWrapper,
  Links,
  HeaderBottom,
  NavMobileOpen,
  MobileContainer,
  NavMobileClose,
  MobileContent,
  MobileHeader,
  MobileActions,
  HeaderLogo,
  MobileLogo,
  MobileHeaderBottom,
  MobileNavbar,
  MobileSidebar,
  MobileBG,
  MobileSocials,
} from "./header.styled";
//@import resources
import { links } from "./data";
import { links as navlinks } from "../navbar/data";
import { isScreenWidth } from "utils/getScreenWidth";
import logo from "assets/images/logo.png";
import home from "assets/images/home.svg";
import staking from "assets/images/staking.png";
import farming from "assets/images/farming.png";
import detail from "assets/images/detail_bg.png";

const Header = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(isScreenWidth(768));
    });
    setIsMobile(isScreenWidth(768));
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

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
        <NavMobileOpen
          isMobile={isMobile}
          onClick={() => setIsOpened(!isOpened)}
        >
          <FaBars />
        </NavMobileOpen>
      </HeaderContainer>
      <HeaderLogo src={logo} alt={"logo"} />
      <HeaderBottom />
      <MobileContainer isMobile={isMobile} isOpened={isOpened}>
        <MobileContent>
          <MobileHeader>
            <NavMobileClose onClick={() => setIsOpened(!isOpened)}>
              <FaTimes />
            </NavMobileClose>
            <MobileLogo src={logo} alt={"mobile-logo"} />
          </MobileHeader>
          <MobileHeaderBottom />
          <MobileActions>
            <MobileNavbar>
              {navlinks.map((item, index) => (
                <NavItem
                  key={index}
                  image={item.image}
                  link={item.link}
                  active={location.pathname === item.link}
                />
              ))}
            </MobileNavbar>
            <MobileSidebar>
              {navlinks.map((item, index) => (
                <SidebarItem
                  key={index}
                  content={item.content}
                  link={item.link}
                  active={location.pathname === item.link}
                />
              ))}
              <MobileBG src={detail} alt={"mobile-bg"} />
              <MobileSocials>
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
              </MobileSocials>
            </MobileSidebar>
          </MobileActions>
        </MobileContent>
      </MobileContainer>
    </HeaderWrapper>
  );
};

export default Header;
