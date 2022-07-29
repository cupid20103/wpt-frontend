import styled from "styled-components";

interface Props {
  isMobile?: boolean;
  isOpened?: boolean;
}

const HeaderWrapper = styled.div`
  width: 100vw;
  height: 247px;
  padding-left: 575px;
  @media screen and (max-width: 1900px) {
    height: 145px;
    padding-left: 375px;
  }
  @media screen and (max-width: 1440px) {
    padding-left: 300px;
  }
  @media screen and (max-width: 768px) {
    padding-left: 0;
  }
`;

const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 25px 230px 25px 70px;
  @media screen and (max-width: 1900px) {
    padding: 15px 100px 15px 50px;
  }
  @media screen and (max-width: 1440px) {
    padding: 15px 50px 15px 25px;
  }
  @media screen and (max-width: 768px) {
    padding: 5px 25px 5px 25px;
  }
`;

const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  @media screen and (max-width: 1900px) {
    padding-top: 25px;
  }
  @media screen and (max-width: 425px) {
    padding-top: 10px;
  }
`;

const HeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > :not(:first-child) {
    margin-left: 20px;
  }
  p {
    font-size: 28px;
  }
  img {
    width: 25px;
    height: 30px;
  }
  @media screen and (max-width: 1900px) {
    & > :not(:first-child) {
      margin-left: 10px;
    }
    p {
      font-size: 24px;
    }
    img {
      width: 20px;
      height: 20px;
    }
  }
  @media screen and (max-width: 1440px) {
    p {
      font-size: 20px;
    }
    img {
      width: 15px;
      height: 15px;
    }
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > :not(:first-child) {
    margin-left: 40px;
  }
  img {
    width: 25px;
    height: 25px;
  }
  @media screen and (max-width: 1900px) {
    & > :not(:first-child) {
      margin-left: 25px;
    }
    img {
      width: 20px;
      height: 20px;
    }
  }
  @media screen and (max-width: 1440px) {
    & > :not(:first-child) {
      margin-left: 15px;
    }
    img {
      width: 15px;
      height: 15px;
    }
  }
  @media screen and (max-width: 425px) {
    display: none;
  }
`;

const NavMobileOpen = styled.div<Props>`
  position: absolute;
  top: 25px;
  display: ${(props) => (props.isMobile ? "block" : "none")};
  color: #fff;
  z-index: 100;
  cursor: pointer;
  svg {
    width: 25px;
    height: 25px;
  }
`;

const HeaderLogo = styled.img`
  position: absolute;
  top: 25px;
  left: 25px;
  width: 125px;
  height: 65px;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const HeaderBottom = styled.div`
  position: fixed;
  left: 0;
  width: 100vw;
  height: 8px;
  background: linear-gradient(90deg, #d9ed92, #168aad);
  @media screen and (max-width: 1900px) {
    height: 5px;
  }
`;

const MobileContainer = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  width: ${(props) => (props.isOpened ? "100%" : 0)};
  height: 100vh;
  display: ${(props) => (props.isMobile ? "block" : "none")};
  background: #000c27;
  overflow: hidden;
  z-index: 200;
`;

const MobileContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const MobileHeader = styled.div`
  position: relative;
  width: 100%;
  height: 145px;
`;

const MobileLogo = styled.img`
  position: absolute;
  top: 50px;
  left: 25px;
  width: 125px;
  height: 65px;
`;

const MobileHeaderBottom = styled.div`
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, #d9ed92, #168aad);
`;

const NavMobileClose = styled.div<Props>`
  position: absolute;
  top: 25px;
  right: 25px;
  color: #fff;
  z-index: 100;
  cursor: pointer;
  svg {
    width: 25px;
    height: 25px;
  }
`;

const MobileActions = styled.div`
  width: 100%;
  height: calc(100vh - 150px);
  display: flex;
`;

const MobileNavbar = styled.div`
  width: 50px;
  padding-top: 25px;
  background-color: #1d283c;
  & > :not(:first-child) {
    margin-top: 15px;
  }
`;

const MobileSidebar = styled.div`
  position: relative;
  padding-top: 25px;
  width: calc(100vw - 50px);
  & > :not(:first-child) {
    margin-top: 15px;
  }
`;

const MobileBG = styled.img`
  position: absolute;
  right: 10px;
  bottom: -200px;
  width: 300px;
  height: 500px;
  z-index: -100;
  @media screen and (max-width: 425px) {
    bottom: -100px;
    width: 250px;
    height: 400px;
  }
`;

const MobileSocials = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  img {
    width: 15px;
    height: 15px;
  }
`;

export {
  HeaderWrapper,
  HeaderContainer,
  HeaderContent,
  HeaderTitle,
  Links,
  NavMobileOpen,
  HeaderLogo,
  HeaderBottom,
  MobileContainer,
  MobileContent,
  MobileHeader,
  MobileLogo,
  MobileHeaderBottom,
  NavMobileClose,
  MobileActions,
  MobileNavbar,
  MobileSidebar,
  MobileBG,
  MobileSocials,
};
