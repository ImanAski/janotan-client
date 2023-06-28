import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "../components/Button";

function Academy() {
  return (
    <div
      className="p-30 bg-gradient-to-b from-black via-transparent to-black h-full h-screen w-full relative flex flex-col items-center">
      <img
          src="./images/academy-bg.jpg"
          alt="#"
          height="1000px"
          className="w-full h-full object-cover absolute mix-blend-overlay"
        />
      <div className="py-24 flex-col flex items-center justify-center  ">
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
            academy
          </Typography>
          {/* It seems that the divider should wrapped in Grid Or List-Style Components for functionality */}
          {/* <Divider
            className=" text-white text-7xl h-full "
            orientation="vertical"
            variant="middle"
            flexItem
          >
            CENTER
          </Divider> */}
      </div>

        <div className="w-full flex">
          <div className="flex-1 self-center justify-end flex">
          <Button>دپارتمان تحصیلی</Button>
          </div>
          <div className="flex m-5 items-center justify-center">
            <div className="inline-block h-[80px] min-h-[1em] w-[2.5px]  bg-gray-400 opacity-100 self-center rounded-full"></div>
          </div>
          <div className="flex-1 self-center justify-start">
            <Button>آکادمی و کلاس ها</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Academy;
