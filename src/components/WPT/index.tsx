import { WPTContainer } from "./wpt.styled";

interface Props {
  title: string;
  amount?: string;
  price?: string;
}

const WPT = (props: Props) => {
  return (
    <WPTContainer>
      <p className={"title"}>{props.title}</p>
      {props.amount && (
        <span className={"amount"}>{props.amount + ` WPT`}</span>
      )}
      {props.price && (
        <span className={"price"}>{`~` + props.price + ` USD`}</span>
      )}
    </WPTContainer>
  );
};

export default WPT;
