import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "../components/Button";

function Academy() {
  return (
    <div className="py-16 flex-col flex items-center justify-start h-screen ">
      <div className=" flex flex-col items-center justify-evenly  max-w-md  space-y-4">
        <div className="inline-block h-[80px] min-h-[1em] w-0.5  bg-neutral-200 opacity-100 self-center rounded-full"></div>
        <Typography
          className=" font-semibold tracking-wide uppercase  text-6xl text-white md:text-7xl "
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
        <div className="inline-block h-[80px] min-h-[1em] w-[2.5px] self-stretch bg-neutral-200 opacity-100 rounded-full"></div>
        <Button>آکادمی و کلاس ها</Button>
      </div>
    </div>
  );
}

export default Academy;
