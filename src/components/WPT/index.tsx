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

const WPT = (props: Props) => {
  const amount = numberWithCommas(props.amount);
  const price = numberWithCommas(props.price);

  return (
    <WPTContainer>
      <p className={"title"}>{props.title}</p>
      {amount && (
        <span className={"amount"}>
          {amount} {props.isStaking ? "WPT" : "WPT-ETH LP"}
        </span>
      )}
      {price && <span className={"price"}>{`~` + price + ` USD`}</span>}
    </WPTContainer>
  );
};

export default WPT;
