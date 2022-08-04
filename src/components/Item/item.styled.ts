import styled from "styled-components";

interface Props {
  percent: number;
}

const ItemContainer = styled.div`
  width: 100%;
  height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > :not(:first-child) {
    margin-top: 5px;
  }
  border: 1px solid #20486e;
  box-shadow: 5px 5px 15px #000000;
  @media screen and (max-width: 1900px) {
    height: 150px;
  }
`;

const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  @media screen and (max-width: 1900px) {
    width: 35px;
    height: 35px;
  }
  @media screen and (max-width: 1440px) {
    width: 25px;
    height: 25px;
  }
`;

const ItemTitle = styled.div`
  color: #43bad1;
  font-size: 16px;
  @media screen and (max-width: 1900px) {
    font-size: 14px;
  }
`;

const ItemBalance = styled.div<Props>`
  & > .percent {
    color: ${({ percent }) => (percent >= 0 ? "#3dd598" : "red")};
    font-size: 17px;
    margin-right: 15px;
  }
  & > .time {
    font-size: 13px;
  }
  @media screen and (max-width: 1900px) {
    & > .percent {
      font-size: 16px;
    }
    & > .time {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 1440px) {
    & > .percent {
      font-size: 14px;
    }
  }
`;

const ItemContent = styled.div`
  font-size: 24px;
  @media screen and (max-width: 1900px) {
    font-size: 20px;
  }
  @media screen and (max-width: 1440px) {
    font-size: 16px;
  }
`;

export { ItemContainer, ItemImage, ItemTitle, ItemBalance, ItemContent };
