import styled from "styled-components";

const SocialsContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: none;
  padding: 15px 0;
  background-color: #000c27;
  @media screen and (max-width: 425px) {
    display: block;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  img {
    width: 20px;
    height: 20px;
  }
`;

export { SocialsContainer, Links };
