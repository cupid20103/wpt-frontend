import styled from "styled-components";

interface Props {
  color?: string;
}

const ExternalLinkContainer = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  img {
    width: 17px;
    height: 17px;
  }
  p {
    color: ${({ color }) => (color ? color : "#D8D8D8")};
    font-size: 16px;
  }
`;

export { ExternalLinkContainer };
