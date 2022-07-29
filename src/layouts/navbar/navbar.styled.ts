import styled from "styled-components";

const NavbarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

const NavbarContainer = styled.div`
  width: 105px;
  height: 100%;
  padding-top: 255px;
  @media screen and (max-width: 1900px) {
    width: 75px;
    padding-top: 150px;
  }
  @media screen and (max-width: 1440px) {
    width: 50px;
  }
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
  @media screen and (max-width: 1900px) {
    padding-top: 50px;
    & > :not(:first-child) {
      margin-top: 15px;
    }
  }
  @media screen and (max-width: 1440px) {
    padding-top: 25px;
  }
`;

const SidebarContainer = styled.div`
  width: 470px;
  height: 100%;
  background: linear-gradient(#000c27, #00334a);
  @media screen and (max-width: 1900px) {
    width: 300px;
  }
  @media screen and (max-width: 1440px) {
    width: 250px;
  }
`;

const SidebarLogo = styled.div`
  width: 100%;
  height: 255px;
  padding-left: 50px;
  padding-top: 80px;
  img {
    width: 225px;
    height: 120px;
  }
  @media screen and (max-width: 1900px) {
    height: 150px;
    padding-left: 35px;
    padding-top: 50px;
    img {
      width: 150px;
      height: 75px;
    }
  }
  @media screen and (max-width: 1440px) {
    img {
      width: 100px;
      height: 50px;
    }
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
  @media screen and (max-width: 1900px) {
    padding-top: 50px;
    font-size: 16px;
    & > :not(:first-child) {
      margin-top: 15px;
    }
  }
  @media screen and (max-width: 1440px) {
    padding-top: 25px;
    font-size: 14px;
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
