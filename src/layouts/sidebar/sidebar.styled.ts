import styled from "styled-components";

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  top: 245px;
  width: 545px;
  height: calc(100vh - 245px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 75px 60px;
  background-color: #103553;
`;

const SidebarLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  img {
    width: 45px;
    height: 75px;
  }
  p {
    font-size: 24px;
  }
`;

const SidebarContent = styled.div`
  padding-top: 35px;
  & > :not(:first-child) {
    padding-top: 25px;
  }
`;

const SidebarItem = styled.div`
  font-size: 16px;
  a {
    color: #d9ed92;
    text-decoration: underline;
  }
`;

const SidebarImg = styled.img`
  position: absolute;
  right: 10px;
  bottom: -250px;
  width: 440px;
  height: 700px;
`;

export {
  SidebarContainer,
  SidebarLogo,
  SidebarContent,
  SidebarItem,
  SidebarImg,
};
