import BlurBackground from "./ui/BlurBackground";
import SpinnerIcon from "../../public/spinner/spinner.svg";

function Spinner() {
  return (
    <BlurBackground>
      <img className=" w-36  lg:w-52" src={SpinnerIcon} />
    </BlurBackground>
  );
}

export default Spinner;
