import styled from "styled-components";

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
`;

const HeaderContainer = styled.div`
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

export {
  HeaderWrapper,
  HeaderContainer,
  HeaderContent,
  HeaderTitle,
  Links,
  HeaderBottom,
};
