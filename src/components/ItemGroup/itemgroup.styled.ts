import styled from "styled-components";

const ItemGroupContainer = styled.div`
  width: 100%;
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
`;

const ItemGroupAPR = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemGroupFee = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #76c893;
  padding-top: 10px;
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
    gap: 30px;
    font-size: 20px;
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
    gap: 20px;
  }
`;

const PlusButton = styled.div`
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
