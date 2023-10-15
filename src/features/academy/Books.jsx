// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "../../styles/App.css";
import "swiper/css/virtual";

// import required modules
import { Virtual, Autoplay, Keyboard, Navigation } from "swiper/modules";

//icons
import nextArrow from "../../../public/icons/rightArrow2.png";
import prevArrow from "../../../public/icons/leftArrow2.png";

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
        // loop={true}
        navigation={{
          prevEl: ".arrow-left",
          nextEl: ".arrow-right",
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1250: {
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
            className="    overflow-hidden "
            onClick={() => navigate(`/academy/${academyBook.id}`)}
          >
            <div className=" relative  mt-16  flex h-[450px]   max-w-[300px]  cursor-pointer   items-center justify-center  rounded-3xl bg-white/10 ">
              <img
                src={academyBook.image}
                alt={academyBook.name}
                className=" -mt-56  w-5/6 max-w-[250px]  object-cover  "
              />
              <div className="absolute bottom-20 flex w-full flex-col items-center justify-center gap-2 text-center   text-2xl text-white md:bottom-10 md:text-3xl">
                <p className=" truncate whitespace-normal text-2xl ">
                  {academyBook.name}
                </p>
                <p className=" text-xl md:text-2xl">
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
        className="arrow-left absolute left-2  top-1/2   w-16  md:left-10 md:w-20   "
        style={{ transform: " translate(0, -50%)" }}
      >
        <img src={prevArrow} />
      </button>
      <button
        className="arrow-right absolute right-2 top-1/2 w-16 md:right-10  md:w-20    "
        style={{ transform: " translate(0, -50%)" }}
      >
        <img src={nextArrow} />
      </button>
    </div>
  );
}

export default Courses;
