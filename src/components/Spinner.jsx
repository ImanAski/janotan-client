import BlurBackground from "./ui/BlurBackground";
import SpinnerIcon from "../../public/spinner/spinner.svg";

function Spinner() {
  return (
    <BlurBackground>
      <img src={SpinnerIcon} />
    </BlurBackground>
  );
}

export default Spinner;
