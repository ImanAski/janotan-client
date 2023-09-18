// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "../../styles/App.css";
// import "swiper/css/navigation";
import "swiper/css/virtual";

// import required modules
import { Virtual, Autoplay, Keyboard, Navigation } from "swiper/modules";

//icons
import nextArrow from "../../../public/icons/rightArrow.svg";
import prevArrow from "../../../public/icons/leftArrow.svg";
import { useCourses } from "./useCourses";
import { useNavigate } from "react-router-dom";

function Courses() {
  const { isLoading, fakeCoursesData: courses } = useCourses();

  const navigate = useNavigate();

  return (
    <div className="relative flex items-center justify-between  px-4 pb-28  md:px-10 ">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        keyboard={{
          enabled: true,
        }}
        dir="rtl"
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={{
          nextEl: ".arrow-left",
          prevEl: ".arrow-right",
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Virtual, Autoplay, Keyboard, Navigation]}
        className="mySwiper mx-4  w-full max-w-7xl"
        virtual={true}
      >
        {courses.map((course, index) => (
          <SwiperSlide
            key={course.name}
            virtualIndex={index}
            className=" h-96  overflow-hidden rounded-xl "
            onClick={() => navigate(`/courses/${course.id}`)}
          >
            <div className=" relative  h-full w-full cursor-pointer bg-gradient-to-b from-transparent via-transparent to-gray-800">
              <img
                src={course.img}
                alt={course.name}
                className=" h-full w-full object-cover mix-blend-overlay "
              />
              <p className=" absolute  bottom-10 w-full text-center text-2xl text-white md:text-3xl">
                {course.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className=" arrow-left arrow w-[20%] max-w-[80px] p-5 lg:w-[35%] lg:p-6  ">
        <img src={prevArrow} />
      </button>
      <button className="arrow-right arrow w-[20%] max-w-[80px] p-5 lg:w-[35%] lg:p-6    ">
        <img src={nextArrow} />
      </button>
    </div>
  );
}

export default Courses;
