import { useNavigate } from "react-router-dom";
import janotanLogoWhite from "../../../public/images/logos/logo-white.png";

function Therapist({ therapistData }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`therapists/${therapistData.name}`)}
      className=" relative mt-16 flex h-full  w-[45%] min-w-[150px] max-w-[260px]  cursor-pointer items-center justify-center rounded-3xl bg-white/10 pt-5 "
    >
      <img className=" -mt-28  " src={therapistData.image} />
      <img
        className=" max-w-24 absolute bottom-20 z-20 w-10 sm:w-20 lg:w-24"
        src={janotanLogoWhite}
      />
      <div className=" absolute h-full w-full bg-gradient-to-t from-[#151515] "></div>
    </div>
  );
}

export default Therapist;
