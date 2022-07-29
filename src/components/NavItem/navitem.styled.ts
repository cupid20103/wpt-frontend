import styled from "styled-components";

interface Props {
  active: boolean;
}

const NavItemContainer = styled.div<Props>`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 10px solid
    ${({ active }) => (active ? "#168AAD" : "transparent")};
  img {
    width: 25px;
    height: 30px;
  }
  @media screen and (max-width: 1900px) {
    height: 35px;
    border-left: 5px solid
      ${({ active }) => (active ? "#168AAD" : "transparent")};
    img {
      width: 15px;
      height: 20px;
    }
  }
  @media screen and (max-width: 1440px) {
    height: 30px;
  }
`;

export { NavItemContainer };
