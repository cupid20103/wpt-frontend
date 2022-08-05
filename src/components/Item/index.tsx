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
  percent?: number;
  isHolders: boolean;
}

const Item = (props: Props) => {
  const content = numberWithCommas(props.content);
  const percent = numberWithCommas(props.percent);

  return (
    <ItemContainer>
      <ItemImage src={props.image} alt={"item"} />
      <ItemTitle>{props.title}</ItemTitle>
      {props.percent !== undefined ? (
        <ItemBalance percent={props.percent}>
          <span className={"percent"}>
            {percent}
            {"%"}
          </span>
          <span className={"time"}>{"In 24hrs"}</span>
        </ItemBalance>
      ) : null}
      <ItemContent>{props.isHolders ? content : `$` + content}</ItemContent>
    </ItemContainer>
  );
};

export default Item;
