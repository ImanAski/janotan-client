import { therapists } from "../assets/data/therapists";
import { useState } from "react";

const Therapist = () => {
  const [activeItem, setActiveItem] = useState(0);
  return (
    <div
      className="p-30 relative  h-auto w-full bg-black
    mix-blend-overlay "
    >
      <div className="flex flex-col items-center justify-center space-y-2.5  pb-24 pt-5">
        <img
          src="../../public/images/therapist-title.png"
          className="  md:w-2/5"
        />

        <div className="flex h-full w-full items-center justify-center p-10 pt-0">
          <ul className=" flex flex-col md:h-[490px] md:flex-row md:gap-0">
            {therapists.map((therapist, index) => (
              <li
                key={index}
                onClick={() => setActiveItem(index)}
                aria-current={activeItem == index}
                className="cursor-pointer  transition-all md:w-[25%] md:[&[aria-current='true']]:w-[48%]"
              >
                <div className="relative h-full w-full">
                  <img
                    src={therapist.img}
                    aria-current={activeItem === index}
                    className=" h-[440px] w-full border-b-2 border-slate-200 object-cover transition-all md:h-[490px] md:border-b-0 md:border-l-2 md:border-slate-200 md:[transition:width_var(--transition,200ms_ease-in)] md:hover:grayscale-0 md:[&[aria-current='false']]:grayscale"
                  />

                  <img
                    className="absolute left-1/2 hidden h-[40px] w-[40px] transform rounded-xl md:top-3/4 md:block md:-translate-x-1/2"
                    src="./images/logo.JPG"
                  />
                  <button
                    type="button"
                    className="text-md absolute left-1/2 z-10 h-auto -translate-x-1/2 -translate-y-1/2 transform cursor-pointer  rounded-full border border-solid bg-black px-2  py-2 transition-all md:-left-5 md:top-3/4 md:translate-x-0 md:translate-y-0 md:text-lg md:hover:-left-7 md:hover:px-4 md:hover:py-4 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-6 w-6 text-white  transition-all"
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
