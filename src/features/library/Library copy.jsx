import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "../../components/ui/Button";

const Library = () => {
  return (
    <>
      <div className="p-30 relative flex h-[760px] w-full flex-col items-center bg-gradient-to-b from-black via-transparent to-black md:h-screen md:min-h-[760px]">
        <img
          src="./images/book-background.jfif"
          alt="#"
          height="1000px"
          className="absolute h-full w-full object-cover mix-blend-overlay"
        />
        <div className="z-40 flex flex-col items-center justify-center space-y-2.5 py-24">
          <div className=" flex max-w-md flex-col items-center  justify-evenly  ">
            <div className="flex w-full">
              <div className="flex flex-1 justify-end self-center"></div>
              <div className="m-5 flex items-center justify-center">
                <div className="inline-block h-[80px] min-h-[1em] w-[2.5px]  self-center rounded-full bg-gray-400 opacity-100"></div>
              </div>
              <div className="flex-1 justify-start self-center"></div>
            </div>
            <Typography
              className=" text-4xl font-semibold uppercase tracking-wide  text-white md:text-7xl md:text-7xl "
              variant="h1"
            >
              library
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

          <div className="flex w-full">
            <div className="flex flex-1 justify-end self-center">
              <div className="flex flex-col justify-evenly space-y-2">
                <Button>میکروبوک ها</Button>
                <Button>رادیو جان و تن</Button>
              </div>
            </div>
            <div className="m-5 flex items-center justify-center">
              <div className="inline-block h-[120px] min-h-[1em] w-[2.5px]  self-center rounded-full bg-gray-400 opacity-100"></div>
            </div>
            <div className="flex flex-1 justify-start self-center">
              <div className="flex flex-col space-y-2">
                <Button>تکست بوک ها</Button>
                <Button>مجله جان و تن</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Library;
