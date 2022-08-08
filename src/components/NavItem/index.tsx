import { useNavigate } from "react-router-dom";
//@import styles
import { NavItemContainer } from "./navitem.styled";

interface Props {
  image: any;
  link: string;
  active: boolean;
}

const NavItem = ({ image, link, active }: Props) => {
  const history = useNavigate();
  const handleMenuClick = (link: string) => {
    history(link);
  };

  return (
    <NavItemContainer active={active} onClick={() => handleMenuClick(link)}>
      <img src={image} alt={"nav"} />
    </NavItemContainer>
  );
};

export default NavItem;
