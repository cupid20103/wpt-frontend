import styled from "styled-components";

const ItemGroupContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #20486e;
`;

const ItemGroupContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  @media screen and (max-width: 1900px) {
    padding: 20px 25px;
  }
  @media screen and (max-width: 1440px) {
    padding: 20px 15px;
  }
  @media screen and (max-width: 768px) {
    padding: 10px 5px;
  }
`;

const ItemGroupAPR = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  @media screen and (max-width: 1900px) {
    font-size: 20px;
  }
  @media screen and (max-width: 1440px) {
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const ItemGroupFee = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #76c893;
  padding-top: 10px;
  @media screen and (max-width: 1900px) {
    padding-top: 5px;
    font-size: 14px;
  }
  @media screen and (max-width: 1440px) {
    font-size: 12px;
  }
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const ItemGroupDown = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 30px;
  & > .operations {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    & > :not(:first-child) {
      margin-left: 30px;
    }
    & > div {
      width: 55px;
      height: 55px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
  & > .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    & > :not(:first-child) {
      margin-left: 20px;
    }
  }
  @media screen and (max-width: 1900px) {
    padding-top: 15px;
    & > .operations {
      & > :not(:first-child) {
        margin-left: 25px;
      }
      & > div {
        width: 35px;
        height: 35px;
      }
    }
  }
  @media screen and (max-width: 1440px) {
    padding-top: 10px;
    & > .operations {
      & > :not(:first-child) {
        margin-left: 20px;
      }
      & > div {
        width: 25px;
        height: 25px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    justify-content: space-between;
    & > .buttons {
      flex-direction: column;
      & > :not(:first-child) {
        margin-left: 0px;
        margin-top: 10px;
      }
    }
  }
`;

const PlusButton = styled.div`
  color: #000c27;
  background-color: #89c697;
  border-radius: 50%;
`;

const MinusButton = styled.div`
  border: 1px solid #ffffff;
  border-radius: 50%;
`;

export {
  ItemGroupContainer,
  ItemGroupContent,
  ItemGroupAPR,
  ItemGroupFee,
  ItemGroupDown,
  PlusButton,
  MinusButton,
};
