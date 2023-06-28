import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "../components/Button";

const Library = () => {
  return (
    <div className="p-30 bg-center bg-cover bg-no-repeat w-full relative bg-[linear-gradient(0deg,rgba(0,0,0,1),rgba(0,0,0,0),rgba(0,0,1)),url('../../public/images/library-bg.jpg')] flex-col flex items-center justify-start  h-screen">
      {/* relative bg-[linear-gradient(0deg,rgba(0,0,0,1),rgba(0,0,0,0),rgba(0,0,1)),url('../../public/images/academy-bg.jpg')] h-screen
    mix-blend-overlay */}
      <div className=" flex flex-col items-center justify-evenly  max-w-md space-y-4 ">
        <div className="w-full flex">
          <div className="flex-1 self-center justify-end flex"></div>
          <div className="flex m-5 items-center justify-center">
            <div className="inline-block h-[80px] min-h-[1em] w-[2.5px]  bg-gray-400 opacity-100 self-center rounded-full"></div>
          </div>
          <div className="flex-1 self-center justify-start"></div>
        </div>
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
      {/* <div className="p-5 flex items-center justify-evenly max-w-md  w-full  ">
        <div className="flex flex-col justify-evenly space-y-2">
          <Button>میکروبوک ها</Button>
          <Button>رادیو جان و تن</Button>
        </div>

        <div className="flex items-center justify-center">
          <div className="inline-block h-[120px] min-h-[1em] w-[2.5px]  bg-gray-400 opacity-100 self-center rounded-full"></div>
        </div>

        <div className="flex flex-col justify-evenly space-y-2">
          <Button>تکست بوک ها</Button>
          <Button>مجله جان و تن</Button>
        </div>
      </div> */}

      <div className="w-full flex">
        <div className="flex-1 self-center justify-end flex">
          <div className="flex flex-col justify-evenly space-y-2">
            <Button>میکروبوک ها</Button>
            <Button>رادیو جان و تن</Button>
          </div>
        </div>
        <div className="flex m-5 items-center justify-center">
          <div className="inline-block h-[120px] min-h-[1em] w-[2.5px]  bg-gray-400 opacity-100 self-center rounded-full"></div>
        </div>
        <div className="flex-1 self-center justify-start flex">
          <div className="flex flex-col space-y-2">
            <Button>تکست بوک ها</Button>
            <Button>مجله جان و تن</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
