const Blog = () => {
  return (
    <div className="p-30 relative flex h-[760px] w-full flex-col items-center bg-gradient-to-b from-black via-transparent to-black md:h-full md:min-h-[760px]">
      <img
        src="./images/academy2-bg.jpg"
        alt="#"
        height="1000px"
        className="absolute h-full w-full object-cover mix-blend-overlay"
      />
      <div className="z-40 flex flex-col items-center justify-center  space-y-2.5 pb-32 pt-5 ">
        <img
          src="../../public/images/blog-title.png"
          className=" w-4/5 md:w-4/6"
        />

        <div className="flex w-full max-w-2xl flex-wrap items-center justify-evenly">
          <img
            src="../../public/images/t-book.png"
            className="w-32 cursor-pointer md:w-48"
          />
          <img
            src="../../public/images/blog-btn.png"
            className="w-32 cursor-pointer md:w-48"
          />
          <img
            src="../../public/images/microbook.png"
            className="w-32 cursor-pointer md:w-48"
          />
          <img
            src="../../public/images/startup.png"
            className="w-32 cursor-pointer md:w-48"
          />
          <img
            src="../../public/images/mags.png"
            className="w-32 cursor-pointer md:w-48"
          />
          <img
            src="../../public/images/cast.png"
            className="w-32 cursor-pointer md:w-48"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
