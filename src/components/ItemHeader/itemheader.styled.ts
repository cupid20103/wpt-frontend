import styled from "styled-components";

interface Props {
  isStaking: boolean;
}

const ItemHeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 111px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #18243b;
`;

const ItemHeaderContainer = styled.div<Props>`
  width: 100%;
  display: flex;
  justify-content: ${({ isStaking }) =>
    isStaking ? "space-between" : "flex-start"};
  align-items: flex-end;
  padding: ${({ isStaking }) => (isStaking ? "0 30px" : "0 80px")};
`;

const ItemHeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  & > .bnb {
    position: absolute;
    width: 35px;
    height: 35px;
    top: 10px;
    left: 30px;
  }
  & > .logo {
    width: 45px;
    height: 75px;
  }
`;

const ItemHeaderText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  font-size: 20px;
  & > .subtitle {
    color: #43bad1;
  }
`;

export {
  ItemHeaderWrapper,
  ItemHeaderContainer,
  ItemHeaderTitle,
  ItemHeaderText,
};
