import IconButton from "./ui/IconButton";

const Footer = () => {
  return (
    <div className=" flex flex-col justify-start gap-2   pb-60  ">
      <div className=" flex flex-row-reverse flex-wrap items-center justify-center gap-3 ">
        <IconButton fill="true">
          <img
            className=" w-6 sm:w-8 md:w-10"
            src="../../public/icons/threads.png"
          />
        </IconButton>

        <IconButton fill="true">
          <img
            className=" w-6 sm:w-8 md:w-10"
            src="../../public/icons/telegram.png"
          />
        </IconButton>

        <IconButton fill="true">
          <img
            className="w-6 sm:w-8 md:w-10"
            src="../../public/icons/instagram.png"
          />
        </IconButton>

        <IconButton fill="true">
          <img
            className="w-6 sm:w-8 md:w-10"
            src="../../public/icons/twitter.png"
          />
        </IconButton>
      </div>

      <div className=" flex flex-col items-center gap-1  text-white">
        <p className="py-5 text-xl sm:text-2xl md:text-3xl ">
          اصفهان ؛ خیابان شیخ‌صدوق شمالی ؛ کوچه 56 ؛ ساختمان سینا
        </p>
        <p
          className=" text-sm font-thin uppercase md:text-xl"
          style={{ letterSpacing: "5px" }}
        >
          janotanCenter.ir
        </p>
        <p
          className=" text-sm font-thin  md:text-xl "
          style={{ wordSpacing: "2px", letterSpacing: "3px" }}
        >
          all right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
