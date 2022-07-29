import styled from "styled-components";

interface Props {
  color?: string;
}

const ExternalLinkContainer = styled.div<Props>`
  img {
    width: 17px;
    height: 17px;
  }
  p {
    font-size: 16px;
    color: ${({ color }) => (color ? color : "#D8D8D8")};
  }
`;

export { ExternalLinkContainer };
