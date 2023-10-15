import therapistsTitle from "../../../public/images/therapists/therapistsTitle.png";

import Therapist from "./Therapist";
import { useTherapists } from "./useTherapists";

function Therapists() {
  const { therapists } = useTherapists();

  return (
    <div className="  flex   flex-col items-center justify-center  gap-28 pb-5 pt-24 lg:gap-20">
      <img className=" h-full w-3/4 max-w-xl" src={therapistsTitle} />
      <div className=" flex max-w-[1240px]   flex-wrap items-center  justify-center gap-2 p-5 sm:gap-10  md:p-10  lg:justify-between">
        {therapists &&
          therapists.map((therapist) => {
            return <Therapist key={therapist.id} therapistData={therapist} />;
          })}
      </div>
    </div>
  );
}

export default Therapists;
