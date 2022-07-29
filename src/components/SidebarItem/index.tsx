import { useNavigate } from "react-router-dom";
//@import styles
import { SidebarItemContainer } from "./sidebaritem.styled";

interface Props {
  content: string;
  link: string;
  active: boolean;
}

const SidebarItem = (props: Props) => {
  const history = useNavigate();
  const handleMenuClick = (link: string) => {
    history(link);
  };

  return (
    <SidebarItemContainer
      active={props.active}
      onClick={() => handleMenuClick(props.link)}
    >
      {props.content}
    </SidebarItemContainer>
  );
};

export default SidebarItem;
