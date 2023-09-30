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

import { useAcademyBooks } from "../academy/useAcademyBooks";
import { useNavigate } from "react-router-dom";

function Courses() {
  const { isLoading, fakeAcademyBooks: academyBooks } = useAcademyBooks();

  const navigate = useNavigate();

  return (
    <div className=" flex items-center justify-between pb-28  ">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
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
          prevEl: ".arrow-left",
          nextEl: ".arrow-right",
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
        className="mySwiper mx-4  max-w-[1240px]"
        virtual={true}
      >
        {academyBooks.map((academyBook, index) => (
          <SwiperSlide
            key={academyBook.name}
            virtualIndex={index}
            className=" h-full w-1/4 overflow-hidden "
            onClick={() => navigate(`/academy/${academyBook.id}`)}
          >
            <div className=" relative  cursor-pointer">
              <img
                src={academyBook.sliderImage}
                alt={academyBook.name}
                className=" h-full w-full object-cover "
              />
              <div className="absolute bottom-16 flex w-full flex-col items-center justify-center gap-2   text-center text-2xl text-white md:text-3xl">
                <p>{academyBook.name}</p>
                <p className=" text-2xl">{academyBook.price}</p>
              </div>
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
