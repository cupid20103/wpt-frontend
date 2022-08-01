import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
//@import styles
import { DetailContainer, DetailContent, DetailItem } from "./detail.styled";

const Detail = () => {
  const location = useLocation();
  const [path, setPath] = useState("");

  useEffect(() => {
    if (location.pathname === "/") {
      setPath(
        "https://etherscan.io/token/0x4fd51cb87ffefdf1711112b5bd8ab682e54988ea"
      );
    } else if (location.pathname === "/staking") {
      setPath(
        "https://etherscan.io/address/0x9132AdAf85802A025d8F3830126E3E9894a451f9"
      );
    } else if (location.pathname === "/farming") {
      setPath(
        "https://etherscan.io/address/0x2040726132171f2F9472b1Bd0E5CeAdb3BAE002C"
      );
    } else {
      setPath("");
    }
  }, [location]);

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
          <a href={path} target={"_blank"} rel={"noreferrer"}>
            {"Visit Etherscan"}
          </a>
        </DetailItem>
      </DetailContent>
    </DetailContainer>
  );
};

export default Detail;
