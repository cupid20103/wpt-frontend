import styled from "styled-components";

interface Props {
  flag: Boolean;
}

const ButtonContainer = styled.div<Props>`
  width: 145px;
  height: 55px;
  border-radius: 30px;
  color: ${({ flag }) => (flag ? "#FFFFFF" : "#000C27")};
  background-color: ${({ flag }) => (flag ? "#43BAD1" : "#D8D8D8")};
`;

export { ButtonContainer };
