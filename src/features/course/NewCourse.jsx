import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import { useGetLatestCourse } from "./useGetLatestCourse";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

function NewCourse() {
  const { isCourseLoading, latestCourse } = useGetLatestCourse();

  const navigate = useNavigate();

  return (
    <div className=" mx-auto  flex h-screen w-[85%] max-w-[1240px] flex-col  items-center justify-center pb-20 pt-20 text-white lg:mb-16 lg:flex-row lg:items-end lg:justify-between lg:pt-0">
      <div className="order-2 pt-10 lg:order-1">
        <h3 className=" mb-3 text-3xl md:text-4xl lg:text-5xl">
          {latestCourse.name}
        </h3>
        <div className=" lg:-mr-16">
          <Button
            size=" text-2xl md:text-3xl lg:text-4xl"
            withIcon={true}
            onClick={() => navigate(`/courses/${latestCourse.id}`)}
          >
            <BsFillArrowRightSquareFill className=" mt-1 w-6 text-white lg:w-8" />
            <p className=" border-b  border-transparent hover:border-slate-200 ">
              برای رزرو و ثبت این دوره کلیک کنید
            </p>
          </Button>
        </div>
      </div>
      <img
        className=" w-[80%]  min-w-[300px] max-w-[600px] object-cover lg:order-2 lg:w-1/2"
        src={latestCourse.img}
      />
    </div>
  );
}

export default NewCourse;
