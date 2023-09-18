import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

function Layout() {
  return (
    <div className="  bg-slate-700  ">
      <Navigation />
      <Outlet />
    </div>
  );
}

export default Layout;
