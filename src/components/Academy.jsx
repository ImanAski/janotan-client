// import Button from "../components/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "../components/Button";

function Academy() {
  return (
    <div
      className="p-30 bg-center bg-cover bg-no-repeat  w-full relative bg-[linear-gradient(0deg,rgba(0,0,0,1),rgba(0,0,0,0),rgba(0,0,1)),url('../../public/images/academy-bg.jpg')] h-screen
    mix-blend-overlay "
    >
      <div className="py-24 flex-col flex items-center justify-center  ">
        <div className=" flex flex-col items-center justify-evenly  max-w-md  ">
          <div className="inline-block h-[80px] min-h-[1em] w-0.5  bg-gray-400 opacity-100 self-center rounded-full"></div>
          <Typography
            className=" font-semibold tracking-wide uppercase  text-7xl text-white md:text-7xl "
            variant="h1"
          >
            academy
          </Typography>
          {/* <Divider
            className=" text-white text-7xl h-full "
            orientation="vertical"
            variant="middle"
            flexItem
          >
            CENTER
          </Divider> */}
        </div>

        <div className="p-5 flex items-center justify-evenly max-w-md  w-full  ">
          <Button>دپارتمان تحصیلی</Button>
          <div className="inline-block h-[80px] min-h-[1em] w-[2.5px] self-stretch bg-gray-400 opacity-100 rounded-full"></div>
          <Button>آکادمی و کلاس ها</Button>
        </div>
      </div>
    </div>
  );
}

export default Academy;
