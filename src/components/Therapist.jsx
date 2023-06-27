import Typography from "@mui/material/Typography";

const Therapist = () => {
  return (
    <div className="flex relative bg-gradient-to-b from-[#000000] via-[#030712] to-[#000000] p-10 h-screen w-full items-center justify-center">
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
            Therapist
          </Typography>
        </div>

        <div className="w-full ">
          <div className="flex m-5 items-center justify-center">
            <div className="inline-block h-[80px] min-h-[1em] w-[2.5px]  bg-gray-400 opacity-100 self-center rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Therapist;
