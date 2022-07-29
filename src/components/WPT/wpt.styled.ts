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
`;

export { WPTContainer };
