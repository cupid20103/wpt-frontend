//@import styles
import { ButtonContainer } from "./button.styled";

interface Props {
  flag?: boolean;
  content: string;
}

const Button = (props: Props) => {
  return <ButtonContainer flag={props.flag}>{props.content}</ButtonContainer>;
};

export default Button;
