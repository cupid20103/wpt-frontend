//@import styles
import { Links, SocialsContainer } from "./socials.styled";
//@import resources
import { links } from "layouts/header/data";

const Socials = () => {
  return (
    <SocialsContainer>
      <Links>
        {links.map((item, index) => (
          <a key={index} href={item.link} target={"_blank"} rel={"noreferrer"}>
            <img src={item.image} alt={"social"} />
          </a>
        ))}
      </Links>
    </SocialsContainer>
  );
};

export default Socials;
