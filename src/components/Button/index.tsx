//@import styles
import { ButtonContainer } from "./button.styled";

interface Props {
  flag?: boolean;
  content: string;
  compound?: () => void;
}

const Button = ({ flag = false, content, compound = () => {} }: Props) => {
  return (
    <ButtonContainer flag={flag} onClick={compound}>
      {content}
    </ButtonContainer>
  );
};

export default Button;
