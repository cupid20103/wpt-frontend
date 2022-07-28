import { Link } from "react-router-dom";
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
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <NavbarActions>
          {links.map((item, index) => (
            <Link key={index} to={item.link}>
              <img src={item.image} alt={"navs"} />
            </Link>
          ))}
        </NavbarActions>
      </NavbarContainer>
      <SidebarContainer>
        <SidebarLogo>
          <img src={logo} alt={"logo"} />
        </SidebarLogo>
        <SidebarActions>
          {links.map((item, index) => (
            <Link key={index} to={item.link}>
              {item.content}
            </Link>
          ))}
        </SidebarActions>
      </SidebarContainer>
    </NavbarWrapper>
  );
};

export default Navbar;
