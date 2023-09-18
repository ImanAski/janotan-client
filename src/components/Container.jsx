import Library from "../features/library/Library";
import Academy from "../features/academy/Academy";

const Container = () => {
  return (
    <div
      className="p-30 relative h-full w-full  bg-[linear-gradient(0deg,rgba(0,0,0,1),rgba(0,0,0,0),rgba(0,0,1)),url('../../public/images/academy-bg.jpg')] bg-cover bg-center bg-no-repeat
  mix-blend-overlay "
    >
      <Academy />
      <Library />
    </div>
  );
};

export default Container;
