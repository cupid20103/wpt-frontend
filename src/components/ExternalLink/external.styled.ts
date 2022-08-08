import styled from "styled-components";

interface Props {
  color?: string;
}

const ExternalLinkContainer = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  & > :not(:first-child) {
    margin-left: 15px;
  }
  a,
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 17px;
    height: 17px;
  }
  p {
    font-size: 16px;
    color: ${({ color }) => color};
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
