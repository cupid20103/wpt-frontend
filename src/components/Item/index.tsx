//@import styles
import {
  ItemBalance,
  ItemContainer,
  ItemContent,
  ItemImage,
  ItemTitle,
} from "./item.styled";
//@import resources
import { numberWithCommas } from "utils/getNumberWithCommas";

interface Props {
  image: any;
  title: string;
  content: number;
  isBalance: boolean;
  isHolders: boolean;
}

const Item = (props: Props) => {
  const content = numberWithCommas(props.content);

  return (
    <ItemContainer>
      <ItemImage src={props.image} alt={"item"} />
      <ItemTitle>{props.title}</ItemTitle>
      {props.isBalance ? (
        <ItemBalance>
          <span className={"percent"}>{"+2.3%"}</span>
          <span className={"time"}>{"In 24hrs"}</span>
        </ItemBalance>
      ) : null}
      <ItemContent>{props.isHolders ? content : `$` + content}</ItemContent>
    </ItemContainer>
  );
};

export default Item;
