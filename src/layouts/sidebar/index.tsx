import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
//@import styles
import {
  SidebarContainer,
  SidebarContent,
  SidebarImg,
  SidebarItem,
  SidebarLogo,
} from "./sidebar.styled";
//@import resources
import detail from "assets/images/detail.png";
import detail_bg from "assets/images/detail_bg.png";

const Sidebar = () => {
  const location = useLocation();
  const [path, setPath] = useState("");

  useEffect(() => {
    if (location.pathname === "/") {
      setPath(
        "https://etherscan.io/token/0x4fd51cb87ffefdf1711112b5bd8ab682e54988ea"
      );
    } else if (location.pathname === "/staking") {
      setPath(
        "https://etherscan.io/address/0x9132AdAf85802A025d8F3830126E3E9894a451f9"
      );
    } else if (location.pathname === "/farming") {
      setPath(
        "https://etherscan.io/address/0x2040726132171f2F9472b1Bd0E5CeAdb3BAE002C"
      );
    } else {
      setPath("");
    }
  }, [location]);

  return (
    <SidebarContainer>
      <SidebarLogo>
        <img src={detail} alt={"detail"} />
        <p>{"WPT Details"}</p>
      </SidebarLogo>
      <SidebarContent>
        <SidebarItem>
          <p>{"Name:"}</p>
          <p>{"WPT Investing Corp"}</p>
        </SidebarItem>
        <SidebarItem>
          <p>{"Symbol:"}</p>
          <p>{"WPT"}</p>
        </SidebarItem>
        <SidebarItem>
          <p>{"Decimal:"}</p>
          <p>{"18"}</p>
        </SidebarItem>
        <SidebarItem>
          <p>{"ETH Contract:"}</p>
          <a href={path} target={"_blank"} rel={"noreferrer"}>
            {"Visit Etherscan"}
          </a>
        </SidebarItem>
      </SidebarContent>
      <SidebarImg src={detail_bg} alt={"sidebar_bg"} />
    </SidebarContainer>
  );
};

export default Sidebar;
