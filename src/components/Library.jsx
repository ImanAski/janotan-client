import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "../components/Button";

const Library = () => {
  return (
    <div className=" flex-col flex items-center justify-start  h-screen">
      <div className=" flex flex-col items-center justify-evenly  max-w-md space-y-4 ">
        <div className="inline-block h-[80px] min-h-[1em] w-0.5  bg-neutral-200 opacity-100 self-center rounded-full"></div>
        <Typography
          className=" font-semibold tracking-wide uppercase  text-6xl text-white md:text-7xl "
          variant="h1"
        >
          library
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
        <div className="flex flex-col justify-evenly space-y-2">
          <Button>میکروبوک ها</Button>
          <Button>رادیو جان و تن</Button>
        </div>

        <div className="inline-block h-[120px] min-h-[1em] w-[2.5px] self-stretch bg-neutral-200 opacity-100 rounded-full"></div>

        <div className="flex flex-col justify-evenly space-y-2">
          <Button>تکست بوک ها</Button>
          <Button>مجله جان و تن</Button>
        </div>
      </div>
    </div>
  );
};

export default Library;
