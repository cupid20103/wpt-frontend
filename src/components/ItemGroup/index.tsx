//@import components
import Button from "components/Button";
import ExternalLink from "components/ExternalLink";
import ItemHeader from "components/ItemHeader";
import WPT from "components/WPT";
//@import styles
import {
  ItemGroupAPR,
  ItemGroupContainer,
  ItemGroupContent,
  ItemGroupDown,
  ItemGroupFee,
  MinusButton,
  PlusButton,
} from "./itemgroup.styled";

interface Props {
  isStaking: boolean;
  title: string;
  subtitle: number;
  tokenInfo?: string;
  apr: number;
  deposit: number;
  withdraw: number;
  oneTitle: string;
  oneLink: string;
  twoTitle: string;
  twoLink: string;
  staked: number;
  sPrice: number;
  earned: number;
  ePrice: number;
  compound?: () => void;
  addToken?: () => void;
}

const ItemGroup = ({
  isStaking,
  title,
  subtitle,
  tokenInfo = "",
  apr,
  deposit,
  withdraw,
  oneTitle,
  oneLink,
  twoTitle,
  twoLink,
  staked,
  sPrice,
  earned,
  ePrice,
  compound = () => {},
  addToken = () => {},
}: Props) => {
  return (
    <ItemGroupContainer>
      <ItemHeader
        isStaking={isStaking}
        title={title}
        subtitle={subtitle}
        link={tokenInfo}
      />
      <ItemGroupContent>
        <ItemGroupAPR>
          <p>{`APR: ` + apr + `%`}</p>
          <ExternalLink title={oneTitle} color={"#76C893"} link={oneLink} />
        </ItemGroupAPR>
        <ItemGroupFee>
          <p>
            {`DEPOSIT FEE: ` + deposit + `%`}
            <br />
            {`WITHDRAW FEE: ` + withdraw + `%`}
          </p>
          {isStaking ? (
            <ExternalLink
              title={twoTitle}
              color={"#76C893"}
              addToken={addToken}
              isMetamask
            />
          ) : (
            <ExternalLink title={twoTitle} color={"#76C893"} link={twoLink} />
          )}
        </ItemGroupFee>
        <ItemGroupDown>
          <WPT
            isStaking={isStaking}
            title={isStaking ? "WPT STAKED" : "WPT-ETH LP STAKED"}
            amount={staked}
            price={sPrice}
          />
          <div className="operations">
            <PlusButton>{"+"}</PlusButton>
            <MinusButton>{"-"}</MinusButton>
          </div>
        </ItemGroupDown>
        <ItemGroupDown>
          <WPT
            isStaking={isStaking}
            title={isStaking ? "WPT EARNED" : "WPT-ETH LP EARNED"}
            amount={earned}
            price={ePrice}
          />

          {isStaking ? (
            <Button flag content="COMPOUND" compound={compound} />
          ) : (
            <Button content="HARVEST" />
          )}
        </ItemGroupDown>
      </ItemGroupContent>
    </ItemGroupContainer>
  );
};

export default ItemGroup;
