//@import styles
import { DetailContainer, DetailContent, DetailItem } from "./detail.styled";

const Detail = () => {
  return (
    <DetailContainer>
      <DetailContent>
        <DetailItem>
          <p>{"Name:"}</p>
          <p>{"WPT Investing Corp"}</p>
        </DetailItem>
        <DetailItem>
          <p>{"Symbol:"}</p>
          <p>{"WPT"}</p>
        </DetailItem>
        <DetailItem>
          <p>{"Decimal:"}</p>
          <p>{"18"}</p>
        </DetailItem>
        <DetailItem>
          <p>{"ETH Contract:"}</p>
          <a href={"/"} target={"_blank"} rel={"noreferrer"}>
            {"Visit Etherscan"}
          </a>
        </DetailItem>
      </DetailContent>
    </DetailContainer>
  );
};

export default Detail;
