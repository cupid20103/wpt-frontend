import { useLocation } from "react-router-dom";
//@import components
import SidebarItem from "components/SidebarItem";
import NavItem from "components/NavItem";
//@import styles
import {
  NavbarActions,
  NavbarContainer,
  NavbarWrapper,
  SidebarActions,
  SidebarContainer,
  SidebarLogo,
} from "./navbar.styled";
//@import resources
import { links } from "./data";
import logo from "assets/images/logo.png";

const Navbar = () => {
  const location = useLocation();

  return (
    <NavbarWrapper>
      <NavbarContainer>
        <NavbarActions>
          {links.map((item, index) => (
            <NavItem
              key={index}
              image={item.image}
              link={item.link}
              active={location.pathname === item.link}
            />
          ))}
        </NavbarActions>
      </NavbarContainer>
      <SidebarContainer>
        <SidebarLogo>
          <img src={logo} alt={"logo"} />
        </SidebarLogo>
        <SidebarActions>
          {links.map((item, index) => (
            <SidebarItem
              key={index}
              content={item.content}
              link={item.link}
              active={location.pathname === item.link}
            />
          ))}
        </SidebarActions>
      </SidebarContainer>
    </NavbarWrapper>
  );
};

export default Navbar;
