import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "./ui/Button";

import IconButton from "./ui/IconButton";

const Footer = () => {
  return (
    <div
      className="p-30 relative h-auto w-full bg-gradient-to-b from-black via-transparent to-black  bg-cover bg-center bg-no-repeat
    mix-blend-overlay "
    >
      <img
        src="./images/footer-bg.jpg"
        alt="#"
        height="1000px"
        className="absolute h-full w-full object-cover mix-blend-overlay"
      />
      <div className="z-40 flex h-[95vh] flex-col justify-between  pb-52 ">
        <div className="z-10 mb-5 flex flex-row-reverse items-center justify-center gap-3 p-5">
          {/* TODO: Adding related Icons for header Icon buttons */}
          <IconButton size="lg">
            <img className="w-10" src="../../public/icons/telegram.png" />
          </IconButton>

          <IconButton size="lg">
            <img className="w-10" src="../../public/icons/instagram.png" />
          </IconButton>

          <IconButton size="lg">
            <img className="w-10" src="../../public/icons/threads.png" />
          </IconButton>
        </div>
        <div className="z-10 flex flex-col items-center gap-1 p-5 text-white">
          <img
            src="./images/logo.png"
            height="100px"
            width="100px"
            className="rounded-xl"
          />
          <p className="text-sm font-semibold uppercase md:text-base">
            janotancenter
          </p>
          <p className=" text-smuppercase md:text-base">
            psychoanalytic clinic
          </p>
          <p className="py-5 md:text-2xl ">
            اصفهان ؛ خیابان شیخ‌صدوق شمالی ؛ کوچه 56 ؛ ساختمان سینا
          </p>
          <p className=" text-sm font-semibold uppercase  md:text-base">
            janotanCenter.ir
          </p>
          <p className=" text-sm  uppercase md:text-base">all right reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
