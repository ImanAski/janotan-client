import TitleBox from "./ui/TitleBox";

function Sections({ titleImg, boxes }) {
  return (
    <div className=" flex items-center justify-between bg-black px-32 pb-28">
      <img src={titleImg} className=" h-60 w-[610px] object-cover" />
      <div className=" flex h-60 w-1/2 flex-col gap-3">
        {boxes.map((box) => {
          return (
            <TitleBox
              count={boxes.length}
              key={box.title}
              title={box.title}
              img={box.img}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Sections;
