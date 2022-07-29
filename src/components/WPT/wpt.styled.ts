import styled from "styled-components";

const WPTContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  & > .title {
    color: #43bad1;
    font-size: 16px;
  }
  & > .amount {
    font-size: 20px;
  }
  & > .price {
    font-size: 14px;
  }
  @media screen and (max-width: 1900px) {
    & > .title {
      font-size: 14px;
    }
    & > .amount {
      font-size: 16px;
    }
    & > .price {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 1440px) {
    & > .title {
      font-size: 12px;
    }
    & > .amount {
      font-size: 14px;
    }
    & > .price {
      font-size: 10px;
    }
  }
`;

export { WPTContainer };
