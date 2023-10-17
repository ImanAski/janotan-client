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
import { useCourses } from "./useCourses";
import { useNavigate } from "react-router-dom";

function Courses() {
  const { courses } = useCourses();

  const navigate = useNavigate();

  return (
    <div className="item flex justify-center   pb-32">
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        keyboard={{
          enabled: true,
        }}
        speed={5000}
        loop={true}
        freeMode={true}
        dir="rtl"
        autoplay={{
          delay: 1,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
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
        className="mySwiper mx-6 max-w-[1240px]  overflow-hidden  md:mx-20 "
        virtual={true}
      >
        {courses &&
          courses.map((course, index) => (
            <SwiperSlide
              key={course.name}
              virtualIndex={index}
              className={`${
                course.active ? " cursor-pointer" : " cursor-default"
              }  h-[400px]  overflow-hidden rounded-3xl`}
              onClick={() => {
                if (!course.active) return;
                navigate(`/courses/${course.id}`);
              }}
            >
              <img
                src={course.image}
                alt={course.name}
                className=" h-full w-full    overflow-hidden  object-cover"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default Courses;
