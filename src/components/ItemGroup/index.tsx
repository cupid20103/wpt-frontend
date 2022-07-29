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
  apr: number;
  oneTitle: string;
  oneLink: string;
  deposit: number;
  withdraw: number;
  twoTitle: string;
  twoLink: string;
  staked: string;
  sPrice: string;
  earned: string;
  ePrice: string;
  reflected: string;
  rPrice: string;
}

const ItemGroup = (props: Props) => {
  return (
    <ItemGroupContainer>
      <ItemHeader
        isStaking={props.isStaking}
        title={props.title}
        subtitle={props.subtitle}
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
            title={"WPT STAKED"}
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
            title={"WPT EARNED"}
            amount={props.earned}
            price={props.ePrice}
          />
          {props.isStaking ? (
            <Button flag content="COMPOUND" />
          ) : (
            <Button content="HARVEST" />
          )}
        </ItemGroupDown>
        <ItemGroupDown>
          <WPT
            title={"WPT REFLECTED"}
            amount={props.reflected}
            price={props.rPrice}
          />
          {props.isStaking ? (
            <div className="buttons">
              <Button flag content="COMPOUND" />
              <Button content="HARVEST" />
            </div>
          ) : (
            <Button content="HARVEST" />
          )}
        </ItemGroupDown>
      </ItemGroupContent>
    </ItemGroupContainer>
  );
};

export default ItemGroup;
