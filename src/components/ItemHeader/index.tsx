//@import components
import ExternalLink from "components/ExternalLink";
//@import styles
import {
  ItemHeaderContainer,
  ItemHeaderText,
  ItemHeaderTitle,
  ItemHeaderWrapper,
} from "./itemheader.styled";
//@import resources
import detail from "assets/images/detail.png";
import bnb from "assets/images/bnb.png";

interface Props {
  isStaking: boolean;
  title: string;
  subtitle: string;
  link?: string;
}

const ItemHeader = (props: Props) => {
  return (
    <ItemHeaderWrapper>
      <ItemHeaderContainer isStaking={props.isStaking}>
        <ItemHeaderTitle>
          {props.isStaking ? null : (
            <img className={"bnb"} src={bnb} alt={"bnb"} />
          )}
          <img className={"logo"} src={detail} alt={"logo"} />
          <ItemHeaderText>
            <p>{props.title}</p>
            <p className={"subtitle"}>{props.subtitle}</p>
          </ItemHeaderText>
        </ItemHeaderTitle>
        {props.isStaking ? (
          <ExternalLink title={"See token info"} link={props.link} />
        ) : null}
      </ItemHeaderContainer>
    </ItemHeaderWrapper>
  );
};

export default ItemHeader;
