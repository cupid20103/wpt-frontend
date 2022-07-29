import styled from "styled-components";

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  top: 255px;
  width: 545px;
  height: calc(100vh - 255px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 75px 60px;
  background: linear-gradient(#103553, transparent);
  @media screen and (max-width: 1900px) {
    top: 150px;
    width: 350px;
    height: calc(100vh - 150px);
    padding: 50px;
  }
  @media screen and (max-width: 1440px) {
    width: 250px;
    padding: 25px;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const SidebarLogo = styled.div`
  display: flex;
  align-items: center;
  & > :not(:first-child) {
    margin-left: 10px;
  }
  img {
    width: 45px;
    height: 75px;
  }
  p {
    font-size: 24px;
  }
  @media screen and (max-width: 1900px) {
    img {
      width: 35px;
      height: 50px;
    }
    p {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 1440px) {
    img {
      width: 25px;
      height: 35px;
    }
    p {
      font-size: 16px;
    }
  }
`;

const SidebarContent = styled.div`
  padding-top: 35px;
  & > :not(:first-child) {
    padding-top: 25px;
  }
  @media screen and (max-width: 1900px) {
    padding-top: 25px;
    & > :not(:first-child) {
      padding-top: 15px;
    }
  }
  @media screen and (max-width: 1440px) {
    padding-top: 15px;
    & > :not(:first-child) {
      padding-top: 10px;
    }
  }
`;

const SidebarItem = styled.div`
  font-size: 16px;
  a {
    color: #d9ed92;
    text-decoration: underline;
  }
  @media screen and (max-width: 1900px) {
    font-size: 14px;
  }
  @media screen and (max-width: 1440px) {
    font-size: 12px;
  }
`;

const SidebarImg = styled.img`
  position: absolute;
  right: 10px;
  bottom: -250px;
  width: 440px;
  height: 700px;
  @media screen and (max-width: 1900px) {
    bottom: -200px;
    width: 300px;
    height: 500px;
  }
  @media screen and (max-width: 1440px) {
    bottom: -50px;
    width: 200px;
    height: 300px;
  }
`;

export {
  SidebarContainer,
  SidebarLogo,
  SidebarContent,
  SidebarItem,
  SidebarImg,
};
