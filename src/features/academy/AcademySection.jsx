import academyTitle from "../../../public/images/academy/academyTitle.png";

import Books from "./Books";

function AcademySection() {
  return (
    <div className="  flex   flex-col items-center justify-center gap-32 pb-10 pt-24">
      <img className=" h-full w-3/4 max-w-xl" src={academyTitle} />
      <Books />
    </div>
  );
}

export default AcademySection;
