//@import styles
import {
  ItemBalance,
  ItemContainer,
  ItemContent,
  ItemImage,
  ItemTitle,
} from "./item.styled";

interface Props {
  image: any;
  title: string;
  isBalance: boolean;
  content: string;
}

const Item = (props: Props) => {
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
      <ItemContent>{props.content}</ItemContent>
    </ItemContainer>
  );
};

export default Item;
