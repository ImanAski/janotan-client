import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import { useGetLatestCourse } from "./useGetLatestCourse";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

function NewCourse() {
  const { isCourseLoading, latestCourse } = useGetLatestCourse();

  const navigate = useNavigate();

  return (
    <div className=" mx-auto mb-16 flex  h-screen max-w-[1240px] items-end justify-between pb-20 text-white">
      <div>
        <h3 className=" mb-3 text-5xl">{latestCourse.name}</h3>
        <div className=" -mr-16">
          <Button
            size="text-4xl"
            withIcon={true}
            onClick={() => navigate(`/courses/${latestCourse.id}`)}
          >
            <BsFillArrowRightSquareFill className=" mt-1 w-8 text-white" />
            <p className=" border-b  border-transparent hover:border-slate-200 ">
              برای رزرو و ثبت این دوره کلیک کنید
            </p>
          </Button>
        </div>
      </div>
      <img
        className=" w-1/2 max-w-[600px] object-cover"
        src={latestCourse.img}
      />
    </div>
  );
}

export default NewCourse;
