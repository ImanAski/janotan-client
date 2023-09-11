import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

function Layout() {
  return (
    <div className=" bg-black px-28 py-10">
      <Navigation />
      <Outlet />
    </div>
  );
}

export default Layout;
