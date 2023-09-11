import IconButton from "./ui/IconButton";

function Navigation() {
  return (
    <div className=" justiry-center fixed z-10 flex flex-row-reverse items-center gap-1  p-5">
      {/* TODO: Adding related Icons for header Icon buttons */}
      <IconButton>
        <img className=" w-6" src="../../public/icons/shopping.png" />
        <span className="absolute left-1 top-[5px] h-1 w-1 rounded-full bg-red-500"></span>
      </IconButton>

      <IconButton>
        <img className=" w-6" src="../../public/icons/profile.png" />
      </IconButton>

      <IconButton>
        <img className=" w-6" src="../../public/icons/search.png" />
      </IconButton>

      <IconButton>
        <img className=" w-6" src="../../public/icons/menu.png" />
      </IconButton>
    </div>
  );
}

export default Navigation;
