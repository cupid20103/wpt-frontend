//@import styles
import { ExternalLinkContainer } from "./external.styled";
//@import resources
import link_svg from "assets/images/link.svg";
import metamask from "assets/images/metamask.png";

interface Props {
  title: string;
  color?: string;
  isMetamask?: boolean;
  link?: string;
  addToken?: () => void;
}

const ExternalLink = ({
  title,
  color = "#D8D8D8",
  isMetamask = false,
  link = "",
  addToken = () => {},
}: Props) => {
  return (
    <ExternalLinkContainer color={color}>
      <p>{title}</p>
      {isMetamask ? (
        <div onClick={addToken}>
          <img src={metamask} alt={"metamask"} />
        </div>
      ) : (
        <a href={link} target={"_blank"} rel={"noreferrer"}>
          <img src={link_svg} alt={"link"} />
        </a>
      )}
    </ExternalLinkContainer>
  );
};

export default ExternalLink;
