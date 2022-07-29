import styled from "styled-components";

const NavbarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 575px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

const NavbarContainer = styled.div`
  width: 105px;
  height: 100%;
  padding-top: 245px;
`;

const NavbarActions = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 85px;
  background-color: #1d283c;
  & > :not(:first-child) {
    margin-top: 20px;
  }
`;

const SidebarContainer = styled.div`
  width: 470px;
  height: 100%;
  background-color: #00334a;
`;

const SidebarLogo = styled.div`
  padding-left: 50px;
  width: 100%;
  height: 245px;
  padding-top: 80px;
  img {
    width: 225px;
    height: 120px;
  }
`;

const SidebarActions = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 85px;
  font-size: 17px;
  & > :not(:first-child) {
    margin-top: 20px;
  }
`;

export {
  NavbarWrapper,
  NavbarContainer,
  NavbarActions,
  SidebarContainer,
  SidebarLogo,
  SidebarActions,
};
