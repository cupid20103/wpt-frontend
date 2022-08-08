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

const Item = ({
  image,
  title,
  content,
  percent = 0,
  isHolders = false,
}: Props) => {
  const ctemp = numberWithCommas(content);
  const ptemp = numberWithCommas(percent);

  return (
    <ItemContainer>
      <ItemImage src={image} alt={"item"} />
      <ItemTitle>{title}</ItemTitle>
      <ItemBalance ptemp={percent}>
        <span className={"percent"}>
          {ptemp}
          {"%"}
        </span>
        <span className={"time"}>{"In 24hrs"}</span>
      </ItemBalance>
      <ItemContent>{isHolders ? ctemp : `$` + ctemp}</ItemContent>
    </ItemContainer>
  );
};

export default Item;
