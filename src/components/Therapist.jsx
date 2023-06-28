import Typography from "@mui/material/Typography";
import { therapists } from "../assets/data/therapists";
import { useState } from "react";

const Therapist = () => {
  const [activeItem, setActiveItem] = useState(0);
  return (
    <div
      className="p-30 bg-black  w-full relative h-auto
    mix-blend-overlay "
    >
      <div className="py-24 flex-col flex items-center justify-center  space-y-2.5">
        <div className=" flex flex-col items-center justify-evenly  max-w-md  ">
          <div className="w-full flex">
            <div className="flex-1 self-center justify-end flex"></div>
            <div className="flex m-5 items-center justify-center">
              <div className="inline-block h-[80px] min-h-[1em] w-[2.5px]  bg-gray-400 opacity-100 self-center rounded-full"></div>
            </div>
            <div className="flex-1 self-center justify-start"></div>
          </div>
          <Typography
            className=" font-semibold tracking-wide uppercase text-4xl  md:text-7xl text-white md:text-7xl "
            variant="h1"
          >
            Therapist
          </Typography>
        </div>

        <div className="w-full h-full flex justify-center p-10 items-center">
          <ul className="flex md:flex-row flex-col md:gap-0 md:h-[640px] mt-10">
            {therapists.map((therapist, index) => (
              <li
                onClick={() => setActiveItem(index)}
                aria-current={activeItem == index}
                className="cursor-pointer md:[&[aria-current='true']]:w-[48%] transition-all md:w-[25%]"
              >
                <div className="relative w-full">
                  <img
                    src={therapist.img}
                    className="md:grayscale transition-all md:hover:grayscale-0 border-b-2 md:border-b-0 border-slate-200 md:border-l-2 md:border-slate-200 object-cover md:h-[640px] h-[440px] w-full"

                  />

                  <img className="absolute md:top-3/4 h-[40px] w-[40px] rounded-xl left-1/2 hidden md:block transform md:-translate-x-1/2" src="./images/logo.JPG" />
                  <button
                    type="button"
                    className="md:top-3/4 h-auto transition-all md:hover:py-4 md:hover:px-4 z-10 md:hover:-left-7 md:-left-5 left-1/2  transform md:translate-x-0 md:translate-y-0 -translate-x-1/2 -translate-y-1/2  absolute border border-solid rounded-full px-2 py-2 cursor-pointer bg-black text-md md:text-lg "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 text-white  transition-all"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Therapist;
