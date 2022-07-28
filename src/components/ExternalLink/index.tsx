//@import styles
import { ExternalLinkContainer } from "./external.styled";
//@import resources
import link from "assets/images/link.svg";
import metamask from "assets/images/metamask.png";

interface Props {
  title: String;
  color?: string;
  isMetamask: Boolean;
}

const ExternalLink = (props: Props) => {
  return (
    <ExternalLinkContainer>
      <p color={props.color}>{props.title}</p>
      {props.isMetamask ? (
        <img src={link} alt="link" />
      ) : (
        <img src={metamask} alt="metamask" />
      )}
    </ExternalLinkContainer>
  );
};

export default ExternalLink;
