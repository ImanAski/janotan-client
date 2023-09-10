// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "../App.css";
// import "swiper/css/navigation";
import "swiper/css/virtual";

// import required modules
import { Virtual, Autoplay, Keyboard, Navigation } from "swiper/modules";

//data
import { courses } from "../assets/data/courses";

//icons
import nextArrow from "../../public/icons/rightArrow.svg";
import prevArrow from "../../public/icons/leftArrow.svg";

function Course() {
  return (
    <div className="relative flex h-full w-full items-center justify-center  bg-black p-10 px-24 pb-32 md:px-48 md:pb-44">
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
        className="mySwiper"
        virtual={true}
      >
        {courses.map((course, index) => (
          <SwiperSlide
            key={course.name}
            virtualIndex={index}
            className=" h-96  w-full overflow-hidden rounded-xl "
          >
            <div className=" relative  h-full w-full cursor-pointer bg-gradient-to-b from-transparent via-transparent to-gray-800">
              <img
                src={course.img}
                alt={course.name}
                className=" h-full w-full object-cover mix-blend-overlay "
              />
              <p className=" absolute  bottom-10 w-full text-center text-xl text-white md:text-3xl">
                {course.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className=" arrow-left arrow left-5 h-16 w-16 md:left-8 md:top-[30%] md:h-28 md:w-28">
        <img className=" w-full " src={prevArrow} />
      </button>
      <button className=" arrow-right arrow right-5 h-16 w-16 md:right-8  md:top-[30%] md:h-28 md:w-28">
        <img className=" w-full" src={nextArrow} />
      </button>
    </div>
  );
}

export default Course;
