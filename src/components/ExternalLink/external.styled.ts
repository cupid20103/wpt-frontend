import styled from "styled-components";

interface Props {
  color?: string;
}

const ExternalLinkContainer = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  & > :not(:first-child) {
    margin-left: 15px;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 17px;
    height: 17px;
  }
  p {
    color: ${({ color }) => (color ? color : "#D8D8D8")};
    font-size: 16px;
  }
  @media screen and (max-width: 1900px) {
    & > :not(:first-child) {
      margin-left: 10px;
    }
    img {
      width: 15px;
      height: 15px;
    }
    p {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 1440px) {
    & > :not(:first-child) {
      margin-left: 5px;
    }
    img {
      width: 10px;
      height: 10px;
    }
    p {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 768px) {
    p {
      font-size: 10px;
    }
  }
`;

export { ExternalLinkContainer };
