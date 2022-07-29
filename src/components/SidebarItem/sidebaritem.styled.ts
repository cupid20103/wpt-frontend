import styled from "styled-components";

interface Props {
  active: boolean;
}

const SidebarItemContainer = styled.div<Props>`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 50px;
  background: ${({ active }) =>
    active ? "linear-gradient(90deg, #48cae4, transparent)" : "transparent"};
  cursor: pointer;
  @media screen and (max-width: 1900px) {
    height: 35px;
    padding: 0 35px;
  }
  @media screen and (max-width: 1440px) {
    height: 30px;
  }
`;

export { SidebarItemContainer };
