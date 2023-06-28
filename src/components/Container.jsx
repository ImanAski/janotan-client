import Library from "./Library";
import Academy from "./Academy";

const Container = () => {
  return (
    <div
      className="p-30 bg-center bg-cover bg-no-repeat  w-full relative bg-[linear-gradient(0deg,rgba(0,0,0,1),rgba(0,0,0,0),rgba(0,0,1)),url('../../public/images/academy-bg.jpg')] h-full
  mix-blend-overlay "
    >
      <Academy />
      <Library />
    </div>
  );
};

export default Container;
