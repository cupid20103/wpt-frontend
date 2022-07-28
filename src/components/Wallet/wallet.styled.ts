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
  gap: 15px;
  font-size: 14px;
  color: #000c27;
  background-color: #ff626e;
  background-color: ${({ color }) => (color ? "#62FFAA" : "#ff626e")};
  border: 1px solid ${({ color }) => (color ? "#43FF6E" : "#ff626e")};
  border-radius: 5px;
  box-shadow: 0 0 20px ${({ color }) => (color ? "#62FFAA" : "#FD4E4E")};
  cursor: pointer;
`;

const WalletStatus = styled.img`
  width: 17px;
  height: 20px;
`;

export { WalletContainer, WalletStatus };
