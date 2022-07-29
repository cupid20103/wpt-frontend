import styled from "styled-components";

const DetailContainer = styled.div`
  display: none;
  width: 100%;
  margin-top: 25px;
  background: linear-gradient(transparent, #103553);
  @media screen and (max-width: 1024px) {
    display: block;
    padding: 25px 20px;
  }
`;

const DetailContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
`;

const DetailItem = styled.div`
  font-size: 12px;
  a {
    color: #d9ed92;
    text-decoration: underline;
  }
`;

export { DetailContainer, DetailContent, DetailItem };
