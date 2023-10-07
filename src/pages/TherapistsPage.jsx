import { useTherapist } from "../features/therapists/useTherapist";

function TherapistsPage() {
  const { therapist, error } = useTherapist();

  if (error) console.log(error);
  return (
    <div className=" bg-red-500 text-white">
      {therapist.name} <br /> {therapist.id} <br /> {therapist.image}
    </div>
  );
}

export default TherapistsPage;
