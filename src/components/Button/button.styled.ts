import styled from "styled-components";

interface Props {
  flag?: boolean;
}

const ButtonContainer = styled.div<Props>`
  width: 145px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  color: ${({ flag }) => (flag ? "#FFFFFF" : "#000C27")};
  background-color: ${({ flag }) => (flag ? "#43BAD1" : "#D8D8D8")};
  cursor: pointer;
`;

export { ButtonContainer };
