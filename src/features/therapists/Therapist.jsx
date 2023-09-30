import janotanLogoWhite from "../../../public/images/logos/logo-white.png";

function Therapist({ imageSrc }) {
  return (
    <div className=" relative flex items-center justify-center  rounded-3xl bg-white/10">
      <img className=" -mt-28" src={imageSrc} />
      <img className=" absolute bottom-20 w-24" src={janotanLogoWhite} />
    </div>
  );
}

export default Therapist;
