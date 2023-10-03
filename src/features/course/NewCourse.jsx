import { useNavigate } from "react-router-dom";
import { useGetLatestCourse } from "./useGetLatestCourse";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import TextBtn from "../../components/ui/TextBtn";

function NewCourse() {
  const { isCourseLoading, latestCourse } = useGetLatestCourse();

  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center ">
      <div className=" mx-24   flex h-screen w-full flex-col items-center  justify-end  pb-20 text-white  sm:mb-16  sm:flex-row sm:items-end sm:justify-between sm:pt-0  md:gap-5 lg:max-w-[1240px]">
        <div className=" order-2 flex flex-col pt-9 sm:order-1 ">
          <h3 className=" mb-3 text-3xl md:text-4xl lg:text-5xl">
            {latestCourse.name}
          </h3>

          <div className=" lg:-mr-16">
            <TextBtn
              size=" text-2xl md:text-3xl lg:text-4xl"
              withIcon={true}
              onClick={() => navigate(`/courses/${latestCourse.id}`)}
            >
              <BsFillArrowRightSquareFill className="mt-1 w-6 text-white lg:mr-16 lg:w-8" />
              <p className=" mr-1 border-b border-transparent   hover:border-slate-200 md:text-[28.5px] lg:text-[43px] ">
                برای رزرو و ثبت این دوره کلیک کنید
              </p>
            </TextBtn>
          </div>
        </div>
        {/* <img
        className=" w-[80%]  min-w-[300px] max-w-[600px] object-cover lg:order-2 lg:w-1/2"
        src={latestCourse.titleImage}
      /> */}
        <img
          className="objecst-cover order-1 h-[180px]  w-[180px] min-w-[100px] max-w-[400px]   sm:order-2 md:h-[300px] md:w-[300px] lg:h-auto lg:w-auto"
          src={latestCourse.titleImage}
        />
      </div>
    </div>
  );
}

export default NewCourse;
