import { useNavigate } from "react-router-dom";
import { useGetLatestCourse } from "./useGetLatestCourse";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import TextBtn from "../../components/ui/TextBtn";

import nextIcon from "../../../public/icons/next-icon.png";

function NewCourse() {
  const { latestCourse } = useGetLatestCourse();

  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center ">
      <div className=" mx-14 flex h-screen   w-full flex-col items-center justify-end pb-20  text-white  sm:mb-16 sm:flex-row  sm:items-end  sm:justify-between sm:pt-0 md:mx-16 md:gap-5  lg:mx-24 lg:max-w-[1240px]">
        <div className=" order-2 flex flex-col pt-9 sm:order-1 ">
          <h3 className=" mb-3 text-center text-2xl  md:text-3xl lg:text-5xl">
            {latestCourse.name}
          </h3>

          <div className="  lg:-mr-16">
            <TextBtn
              size="   w-full text-2xl md:text-2xl lg:text-4xl"
              withIcon={true}
              onClick={() => navigate(`/courses/${latestCourse.id}`)}
            >
              <img
                src={nextIcon}
                className=" mt-1 w-5  text-white md:w-7 lg:w-10"
              />
              <p
                className=" mr-1 break-words    border-b border-transparent  text-[20px]  hover:border-slate-200 md:text-2xl lg:text-[45px] "
                style={{ wordWrap: "break-word" }}
              >
                برای رزرو و ثبت این دوره کلیک کنید
              </p>
            </TextBtn>
          </div>
        </div>
        <img
          className="objecst-cover order-1 h-[180px]  w-[180px] min-w-[100px] max-w-[400px]   sm:order-2 md:h-[300px] md:w-[300px] lg:h-auto lg:w-auto"
          src={latestCourse.title_image}
        />
      </div>
    </div>
  );
}

export default NewCourse;
