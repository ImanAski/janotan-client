import { useNavigate } from "react-router-dom";
import libraryTitle from "../../../public/images/library/libraryTitle.png";
import Button from "../../components/ui/Button";

function LibrarySection() {
  const navigate = useNavigate();

  return (
    <div className=" mx-auto flex  w-fit flex-col items-center justify-center gap-10">
      <img className=" h-full w-3/4 max-w-3xl" src={libraryTitle} />
      <div className=" flex w-3/4 flex-col items-center px-5  md:items-start">
        <Button onClick={() => navigate("/microbooks")}>میکروبوک‌های‌ما</Button>
        <Button onClick={() => navigate("/blogs")}>وبلاگ‌و‌جستارها</Button>
        <Button onClick={() => navigate("/counseling")}>مشاوره‌تحصیلی</Button>
        <Button onClick={() => navigate("/academy")}>کلاس‌ها‌و‌آکادمی‌</Button>
      </div>
    </div>
  );
}

export default LibrarySection;
