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
            className=" font-semibold tracking-wide uppercase  text-7xl text-white md:text-7xl "
            variant="h1"
          >
            Therapist
          </Typography>
        </div>

        <div className="w-full h-full flex justify-center p-10 items-center">
          <ul className="flex flex-row md:h-[640px] mt-10">
            {therapists.map((therapist, index) => (
              <li
                onClick={() => setActiveItem(index)}
                aria-current={activeItem == index}
                className=""
              >
                <div className="relative">
                  <img
                    src={therapist.img}
                    className="grayscale transition-all md:hover:grayscale-0 border-l-2 border-slate-200 object-cover h-[640px] w-full"

                  />
                  <button
                    type="button"
                    className=" top-3/4 h-auto transition-all hover:py-4 hover:px-4 z-10 hover:-left-7 -left-5 absolute border border-solid rounded-full px-2 py-2 cursor-pointer bg-black text-md md:text-lg "
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
