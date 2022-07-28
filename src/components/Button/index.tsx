//@import styles
import { ButtonContainer } from "./button.styled";

interface Props {
  flag: Boolean;
  content: String;
}

const Button = (props: Props) => {
  return <ButtonContainer flag={props.flag}>{props.content}</ButtonContainer>;
};

export default Button;
