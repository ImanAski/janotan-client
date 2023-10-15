// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "../../styles/App.css";
import "swiper/css/virtual";

// import required modules
import { Virtual, Autoplay, Keyboard, Navigation } from "swiper/modules";

//icons
import nextArrow from "../../../public/icons/rightArrow.svg";
import prevArrow from "../../../public/icons/leftArrow.svg";

import { useAcademyBooks } from "../academy/useAcademyBooks";
import { useNavigate } from "react-router-dom";

import discountIcon from "../../../public/icons/discount-icon.png";
import { priceFormatter } from "../../utils/helpers";

function Courses() {
  const { academyBooks } = useAcademyBooks();

  const navigate = useNavigate();

  return (
    <div className=" relative  w-full   md:px-10  ">
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
        className="mySwiper mx-20  h-full   max-w-[1240px] md:mx-24 "
        virtual={true}
      >
        {academyBooks.map((academyBook, index) => (
          <SwiperSlide
            key={academyBook.name}
            virtualIndex={index}
            className="   max-w-[295px] overflow-hidden "
            onClick={() => navigate(`/academy/${academyBook.id}`)}
          >
            <div className=" relative flex  cursor-pointer items-center justify-center pb-6">
              <img
                src={academyBook.image}
                alt={academyBook.name}
                className="   block h-full w-full  object-cover "
              />
              <div className="absolute bottom-12 flex w-full flex-col items-center justify-center gap-2 text-center   text-2xl text-white md:bottom-20 md:text-3xl">
                <p className=" md:text-md text-md truncate whitespace-normal">
                  {academyBook.name}
                </p>
                <p className=" text-base md:text-2xl">
                  {priceFormatter(academyBook.price)} تومان
                </p>
              </div>

              {academyBook.discount && (
                <img
                  className="   absolute bottom-0  z-10   w-14  "
                  src={discountIcon}
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className=" arrow-left  arrow absolute left-5  top-1/2 w-[15%] max-w-[80px] p-5 sm:left-10 lg:w-[35%] lg:p-6  "
        style={{ transform: " translate(0, -50%)" }}
      >
        <img src={prevArrow} />
      </button>
      <button
        className=" arrow-right arrow absolute right-5  top-1/2 w-[15%]  max-w-[80px] p-5 sm:right-10 lg:w-[35%] lg:p-6    "
        style={{ transform: " translate(0, -50%)" }}
      >
        <img src={nextArrow} />
      </button>
    </div>
  );
}

export default Courses;
