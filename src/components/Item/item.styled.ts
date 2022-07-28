import styled from "styled-components";

const ItemContainer = styled.div`
  width: 100%;
  height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border: 1px solid #20486e;
  box-shadow: 5px 5px 15px #000000;
`;

const ItemImage = styled.img`
  width: 50px;
  height: 50px;
`;

const ItemTitle = styled.div`
  color: #43bad1;
  font-size: 16px;
`;

const ItemBalance = styled.div`
  & > .percent {
    color: #3dd598;
    font-size: 17px;
    margin-right: 15px;
  }
  & > .time {
    font-size: 13px;
  }
`;

const ItemContent = styled.div`
  font-size: 24px;
`;

export { ItemContainer, ItemImage, ItemTitle, ItemBalance, ItemContent };
