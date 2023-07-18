import IconButton from "./btn/IconButton";

function Header() {
  return (
    <div>
      <div className="p-30 relative h-[760px] w-full bg-gradient-to-b from-black via-transparent to-black md:h-screen md:min-h-[760px]">
        <img
          src="./images/book-background.jfif"
          alt="#"
          height="1000px"
          className="absolute h-full w-full object-cover mix-blend-overlay"
        />
        <div className="flex flex-col items-center justify-center p-24">
          <img src="../../public/images/logo.png" className="w-80 rounded-xl" />
          <div className="justiry-center z-10 flex flex-row-reverse items-center gap-1 p-5">
            {/* TODO: Adding related Icons for header Icon buttons */}
            <IconButton>
              <img className="w-8" src="../../public/icons/shopping.png" />
              <span className="absolute left-0 top-0.5 h-1.5 w-1.5 rounded-full bg-red-500"></span>
            </IconButton>

            <IconButton>
              <img className="w-8" src="../../public/icons/profile.png" />
            </IconButton>

            <IconButton>
              <img className="w-8" src="../../public/icons/search.png" />
            </IconButton>

            <IconButton>
              <img className="w-8" src="../../public/icons/menu.png" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
