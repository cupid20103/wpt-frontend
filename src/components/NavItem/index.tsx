import { useNavigate } from "react-router-dom";
//@import styles
import { NavItemContainer } from "./navitem.styled";

interface Props {
  image: any;
  link: string;
  active: boolean;
}

const NavItem = (props: Props) => {
  const history = useNavigate();
  const handleMenuClick = (link: string) => {
    history(link);
  };

  return (
    <NavItemContainer
      active={props.active}
      onClick={() => handleMenuClick(props.link)}
    >
      <img src={props.image} alt={"nav"} />
    </NavItemContainer>
  );
};

export default NavItem;
