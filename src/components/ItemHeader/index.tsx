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
  subtitle: number;
  link?: string;
}

const ItemHeader = ({ isStaking, title, subtitle, link = "" }: Props) => {
  return (
    <ItemHeaderWrapper>
      <ItemHeaderContainer isStaking={isStaking}>
        <ItemHeaderTitle>
          {!isStaking && <img className={"bnb"} src={bnb} alt={"bnb"} />}
          <img className={"logo"} src={detail} alt={"logo"} />
          <ItemHeaderText>
            <p>{title}</p>
            <p className={"subtitle"}>
              {isStaking
                ? subtitle + " DAYS STAKING"
                : "Liquidity: $" + subtitle}
            </p>
          </ItemHeaderText>
        </ItemHeaderTitle>
        {isStaking && <ExternalLink title={"See token info"} link={link} />}
      </ItemHeaderContainer>
    </ItemHeaderWrapper>
  );
};

export default ItemHeader;
