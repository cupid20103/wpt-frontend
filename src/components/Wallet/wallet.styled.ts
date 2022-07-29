import styled from "styled-components";

interface Props {
  color?: any;
}

const WalletContainer = styled.div<Props>`
  width: 180px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > :not(:first-child) {
    margin-left: 15px;
  }
  font-size: 14px;
  color: #000c27;
  background-color: #ff626e;
  background-color: ${({ color }) => (color ? "#62FFAA" : "#ff626e")};
  border: 1px solid ${({ color }) => (color ? "#43FF6E" : "#ff626e")};
  border-radius: 5px;
  box-shadow: 0 0 20px ${({ color }) => (color ? "#62FFAA" : "#FD4E4E")};
  cursor: pointer;
  @media screen and (max-width: 1900px) {
    width: 150px;
    height: 30px;
  }
  @media screen and (max-width: 1440px) {
    font-size: 12px;
    width: 125px;
    height: 25px;
    & > :not(:first-child) {
      margin-left: 5px;
    }
  }
`;

const WalletStatus = styled.img`
  width: 17px;
  height: 20px;
  @media screen and (max-width: 1900px) {
    width: 15px;
    height: 15px;
  }
`;

export { WalletContainer, WalletStatus };
