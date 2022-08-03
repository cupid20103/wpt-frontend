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
  subtitle: string;
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
}

const ItemGroup = (props: Props) => {
  return (
    <ItemGroupContainer>
      <ItemHeader
        isStaking={props.isStaking}
        title={props.title}
        subtitle={props.subtitle}
        link={props.tokenInfo}
      />
      <ItemGroupContent>
        <ItemGroupAPR>
          <p>{`APR: ` + props.apr + `%`}</p>
          <ExternalLink
            title={props.oneTitle}
            color={"#76C893"}
            link={props.oneLink}
          />
        </ItemGroupAPR>
        <ItemGroupFee>
          <p>
            {`DEPOSIT FEE: ` + props.deposit + `%`}
            <br />
            {`WITHDRAW FEE: ` + props.withdraw + `%`}
          </p>
          {props.isStaking ? (
            <ExternalLink
              title={props.twoTitle}
              color={"#76C893"}
              link={props.twoLink}
              isMetamask
            />
          ) : (
            <ExternalLink
              title={props.twoTitle}
              color={"#76C893"}
              link={props.twoLink}
            />
          )}
        </ItemGroupFee>
        <ItemGroupDown>
          <WPT
            isStaking={props.isStaking}
            title={props.isStaking ? "WPT STAKED" : "WPT-ETH LP STAKED"}
            amount={props.staked}
            price={props.sPrice}
          />
          <div className="operations">
            <PlusButton>{"+"}</PlusButton>
            <MinusButton>{"-"}</MinusButton>
          </div>
        </ItemGroupDown>
        <ItemGroupDown>
          <WPT
            isStaking={props.isStaking}
            title={props.isStaking ? "WPT EARNED" : "WPT-ETH LP EARNED"}
            amount={props.earned}
            price={props.ePrice}
          />

          {props.isStaking ? (
            <Button flag content="COMPOUND" />
          ) : (
            <Button content="HARVEST" />
          )}
        </ItemGroupDown>
      </ItemGroupContent>
    </ItemGroupContainer>
  );
};

export default ItemGroup;
