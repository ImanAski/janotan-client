import Button from "../../components/ui/Button";

function Academy() {
  return (
    <div className="p-30 relative flex h-[760px] w-full flex-col items-center bg-gradient-to-b from-black via-transparent to-black md:h-screen md:min-h-[760px]">
      <img
        src="./images/academy-bg.jpg"
        alt="#"
        height="1000px"
        className="absolute h-full w-full object-cover mix-blend-overlay"
      />
      <div className="z-40 flex flex-col items-center justify-center space-y-2.5 py-11">
        <img
          src="../../public/images/department.png"
          className=" w-3/4  md:w-3/5"
        />
        <div className="flex w-full justify-center">
          <Button>ورود به دپارتمان و آکادمی </Button>
        </div>
      </div>
    </div>
  );
}

export default Academy;
