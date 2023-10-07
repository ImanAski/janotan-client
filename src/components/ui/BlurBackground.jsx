function BlurBackground({ children }) {
  return (
    <div className=" fixed z-50  flex h-full w-full items-center justify-center   bg-[#151515]/60 backdrop-blur-sm ">
      {children}
    </div>
  );
}

export default BlurBackground;
