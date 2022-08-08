//@import styles
import { WPTContainer } from "./wpt.styled";
//@import resources
import { numberWithCommas } from "utils/getNumberWithCommas";

interface Props {
  isStaking?: boolean;
  title: string;
  amount: number;
  price: number;
}

const WPT = ({ isStaking = false, title, amount, price }: Props) => {
  const atemp = numberWithCommas(amount);
  const ptemp = numberWithCommas(price);

  return (
    <WPTContainer>
      <p className={"title"}>{title}</p>
      <span className={"amount"}>
        {atemp} {isStaking ? "WPT" : "WPT-ETH LP"}
      </span>
      <span className={"price"}>{`~` + ptemp + ` USD`}</span>
    </WPTContainer>
  );
};

export default WPT;
