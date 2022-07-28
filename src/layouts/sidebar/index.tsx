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
          <a href="/">{"Visit Etherscan"}</a>
        </SidebarItem>
      </SidebarContent>
      <SidebarImg src={detail_bg} alt={"sidebar_bg"} />
    </SidebarContainer>
  );
};

export default Sidebar;
