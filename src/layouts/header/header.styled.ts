import styled from "styled-components";

const HeaderWrapper = styled.div`
  width: 100vw;
  height: 245px;
  padding-left: 575px;
  border-bottom: 9px solid #d9ed92;
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 25px 230px 25px 70px;
`;

const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
`;

const HeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 28px;
  img {
    width: 25px;
    height: 30px;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  img {
    width: 25px;
    height: 25px;
  }
`;

export { HeaderWrapper, HeaderContainer, HeaderContent, HeaderTitle, Links };
