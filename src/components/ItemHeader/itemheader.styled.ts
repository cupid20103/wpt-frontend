import styled from "styled-components";

interface Props {
  isStaking: boolean;
}

const ItemHeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 111px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #18243b;
  @media screen and (max-width: 1900px) {
    height: 75px;
  }
  @media screen and (max-width: 1440px) {
    height: 50px;
  }
`;

const ItemHeaderContainer = styled.div<Props>`
  width: 100%;
  display: flex;
  justify-content: ${({ isStaking }) =>
    isStaking ? "space-between" : "flex-start"};
  align-items: flex-end;
  padding: ${({ isStaking }) => (isStaking ? "0 30px" : "0 80px")};
  @media screen and (max-width: 1900px) {
    padding: ${({ isStaking }) => (isStaking ? "0 25px" : "0 50px")};
  }
  @media screen and (max-width: 1440px) {
    padding: ${({ isStaking }) => (isStaking ? "0 15px" : "0 25px")};
  }
  @media screen and (max-width: 768px) {
    padding: ${({ isStaking }) => (isStaking ? "0 5px" : "0 15px")};
  }
`;

const ItemHeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > :not(:first-child) {
    margin-left: 20px;
  }
  & > .bnb {
    position: absolute;
    width: 35px;
    height: 35px;
    top: 10px;
    left: 30px;
  }
  & > .logo {
    width: 45px;
    height: 75px;
  }
  @media screen and (max-width: 1900px) {
    & > :not(:first-child) {
      margin-left: 15px;
    }
    & > .bnb {
      width: 20px;
      height: 20px;
      top: 10px;
      left: 25px;
    }
    & > .logo {
      width: 30px;
      height: 50px;
    }
  }
  @media screen and (max-width: 1440px) {
    & > :not(:first-child) {
      margin-left: 10px;
    }
    & > .bnb {
      width: 15px;
      height: 15px;
      top: 5px;
      left: 15px;
    }
    & > .logo {
      width: 25px;
      height: 35px;
    }
  }
  @media screen and (max-width: 768px) {
    & > :not(:first-child) {
      margin-left: 5px;
    }
    & > .bnb {
      width: 15px;
      height: 15px;
      top: 5px;
      left: 15px;
    }
    & > .logo {
      width: 20px;
      height: 30px;
    }
  }
`;

const ItemHeaderText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 20px;
  & > :not(:first-child) {
    margin-top: 10px;
  }
  & > .subtitle {
    color: #43bad1;
  }
  @media screen and (max-width: 1900px) {
    font-size: 16px;
  }
  @media screen and (max-width: 1440px) {
    font-size: 14px;
    & > :not(:first-child) {
      margin-top: 5px;
    }
  }
  @media screen and (max-width: 768px) {
    font-size: 10px;
    & > :not(:first-child) {
      margin-top: 5px;
    }
  }
`;

export {
  ItemHeaderWrapper,
  ItemHeaderContainer,
  ItemHeaderTitle,
  ItemHeaderText,
};
