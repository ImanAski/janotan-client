import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { courses } from "../assets/data/courses";
import { LazyLoadImage } from "react-lazy-load-image-component";

function StaffCarousel() {
  const [activeItem, setActiveItem] = useState(2);
  const wrapperRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    wrapperRef.current.style.setProperty(
      "--transition",
      "600ms cubic-bezier(0.22, 0.61, 0.36, 1)",
    );

    timeoutRef.current = setTimeout(() => {
      wrapperRef.current?.style.removeProperty("--transition");
    }, 900);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeItem]);

  return (
    <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-b from-[#000000] via-[#030712] to-[#000000] p-10">
      <div className="w-[1200px] max-w-full">
        <ul
          ref={wrapperRef}
          className="group flex flex-col gap-3 md:h-[340px] md:flex-row md:gap-[1.5%]"
        >
          {courses.map((person, index) => (
            <li
              onClick={() => setActiveItem(index)}
              aria-current={activeItem === index}
              className={classNames(
                "relative cursor-pointer md:w-[8%] md:[&[aria-current='true']]:w-[48%]",
                "md:[transition:width_var(--transition,200ms_ease-in)]",
                "md:before-block before:absolute before:bottom-0 before:left-[-10px] before:right-[-10px] before:top-0 before:hidden before:bg-white",
                "md:[&:not(:hover),&:not(:first),&:not(:last)]:group-hover:w-[7%] md:hover:w-[12%]",
              )}
              key={person.name}
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#000]">
                <img
                  className="z-11 bg-gradient-to-l,from-black,to-transparent absolute left-0 top-1/2 h-auto w-full max-w-none -translate-y-1/2 object-cover transition-all md:right-1/2 md:h-[640px] md:w-[590px] md:translate-x-1/2 md:[&[aria-current='false']]:grayscale"
                  src={person.img}
                  alt={person.name}
                  width="340px"
                  height="340px"
                  aria-current={activeItem === index}
                />
                <div
                  className={classNames(
                    "inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-80 duration-300 before:absolute before:bottom-0 before:left-0 before:right-[-546px] before:top-[-148px] before:z-10 after:bottom-[28px] after:left-[-434px] after:right-0 after:top-0 after:z-10 md:absolute md:transition-opacity",
                    activeItem === index ? "md:opacity-80" : "md:opacity-0",
                  )}
                />
                <div
                  className={classNames(
                    "justify-left bottom-8 flex w-full flex-col items-center p-4 text-white transition-[transform,opacity] md:absolute md:p-0",
                    activeItem === index
                      ? "md:translate-x-0 md:opacity-100"
                      : "md:translate-x-4 md:opacity-0",
                  )}
                >
                  <p className="z-10 p-5 text-lg font-bold md:text-3xl">
                    {person.name}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StaffCarousel;
