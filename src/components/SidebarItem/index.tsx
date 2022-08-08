import { useNavigate } from "react-router-dom";
//@import styles
import { SidebarItemContainer } from "./sidebaritem.styled";

interface Props {
  content: string;
  link: string;
  active: boolean;
}

const SidebarItem = ({ content, link, active }: Props) => {
  const history = useNavigate();
  const handleMenuClick = (link: string) => {
    history(link);
  };

  return (
    <SidebarItemContainer active={active} onClick={() => handleMenuClick(link)}>
      {content}
    </SidebarItemContainer>
  );
};

export default SidebarItem;
