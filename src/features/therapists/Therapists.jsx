import therapistsTitle from "../../../public/images/therapists/therapistsTitle.png";

import therapist1 from "../../../public/images/therapists/therapists1.png";
import therapist2 from "../../../public/images/therapists/therapists2.png";
import therapist3 from "../../../public/images/therapists/therapists3.png";
import therapist4 from "../../../public/images/therapists/therapists4.png";
import Therapist from "./Therapist";

function Therapists() {
  return (
    <div className="  flex   flex-col items-center justify-center gap-56 pb-10 pt-24">
      <img className=" h-full w-3/4 max-w-xl" src={therapistsTitle} />
      <div className=" flex max-w-[1240px] flex-wrap items-center justify-between  gap-5">
        <Therapist imageSrc={therapist1} />
        <Therapist imageSrc={therapist2} />
        <Therapist imageSrc={therapist3} />
        <Therapist imageSrc={therapist4} />
      </div>
    </div>
  );
}

export default Therapists;
