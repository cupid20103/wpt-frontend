import styled from "styled-components";

const HomeWrapper = styled.div`
  margin: 0 545px 0 575px;
  height: calc(100vh - 255px);
  padding: 75px;
  overflow-y: auto;
  @media screen and (max-width: 1900px) {
    margin: 0 350px 0 375px;
    height: calc(100vh - 150px);
    padding: 50px;
  }
  @media screen and (max-width: 1440px) {
    margin: 0 250px 0 300px;
    padding: 25px;
  }
  @media screen and (max-width: 1024px) {
    margin: 0 0 0 300px;
  }
  @media screen and (max-width: 768px) {
    margin: 0 0 0 50px;
  }
  @media screen and (max-width: 425px) {
    height: calc(100vh - 205px);
    margin: 0 0 55px 0px;
  }
`;

const HomeContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 35px;
  @media screen and (max-width: 425px) {
    gap: 25px;
  }
`;

export { HomeWrapper, HomeContainer };
