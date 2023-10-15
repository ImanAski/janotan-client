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
        // loop={true}
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
        className="mySwiper mx-20  max-w-[1240px]  overflow-hidden "
        virtual={true}
      >
        {courses &&
          courses.map((course, index) => (
            <SwiperSlide
              key={course.name}
              virtualIndex={index}
              className=" h-[400px]  overflow-hidden rounded-3xl "
              onClick={() => navigate(`/courses/${course.id}`)}
            >
              <img
                src={course.image}
                alt={course.name}
                className=" h-full w-full  cursor-pointer  overflow-hidden  object-cover"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default Courses;
