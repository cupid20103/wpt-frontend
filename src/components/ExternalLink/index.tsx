//@import styles
import { ExternalLinkContainer } from "./external.styled";
//@import resources
import link from "assets/images/link.svg";
import metamask from "assets/images/metamask.png";

interface Props {
  title: string;
  color?: string;
  isMetamask?: boolean;
  link?: string;
}

const ExternalLink = (props: Props) => {
  return (
    <ExternalLinkContainer color={props.color}>
      <p>{props.title}</p>
      {props.isMetamask ? (
        <a href={props.link} target={"_blank"} rel={"noreferrer"}>
          <img src={metamask} alt={"metamask"} />
        </a>
      ) : (
        <a href={props.link} target={"_blank"} rel={"noreferrer"}>
          <img src={link} alt={"link"} />
        </a>
      )}
    </ExternalLinkContainer>
  );
};

export default ExternalLink;
