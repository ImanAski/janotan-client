import { useParams } from "react-router-dom";
import { useAcademyBook } from "../features/academy/useAcademyBook";

function HandoutPage() {
  const { error, academyBook } = useAcademyBook();
  if (error) console.log(error);

  return (
    <div className="  bg-blue-400 text-white">
      {academyBook.name} <br /> {academyBook.id}
    </div>
  );
}

export default HandoutPage;
