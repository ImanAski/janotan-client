import Typography from "@mui/material/Typography";

import Button from "../components/Button";

const Blog = () => {
  return (
    <div className="p-30 bg-gradient-to-b from-black via-transparent to-black h-full h-screen w-full relative flex flex-col items-center">
      <img
        src="./images/academy2-bg.jpg"
        alt="#"
        height="1000px"
        className="w-full h-full object-cover absolute mix-blend-overlay"
      />
      <div className="py-24 flex-col flex items-center justify-center  z-40 space-y-2.5">
        <div className=" flex flex-col items-center justify-evenly  max-w-md  ">
          <div className="w-full flex">
            <div className="flex-1 self-center justify-end flex"></div>
            <div className="flex m-5 items-center justify-center">
              <div className="inline-block h-[80px] min-h-[1em] w-[2.5px]  bg-gray-400 opacity-100 self-center rounded-full"></div>
            </div>
            <div className="flex-1 self-center justify-start"></div>
          </div>
          <Typography
            className=" font-semibold tracking-wide uppercase text-4xl  md:text-7xl text-white md:text-7xl "
            variant="h1"
          >
            Blog
          </Typography>
        </div>

        <div className="w-full flex justify-center items-center">
          <Button>خواندن مقالات و جستارها</Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
