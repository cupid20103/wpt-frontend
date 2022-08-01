import GridLoader from "react-spinners/GridLoader";
//@import styles
import { LoaderContainer } from "./loader.styled";

const Loader = () => {
  return (
    <LoaderContainer>
      <GridLoader color={"#48cae4"} />
    </LoaderContainer>
  );
};

export default Loader;
