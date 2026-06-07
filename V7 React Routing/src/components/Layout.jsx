import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <h1>Layout</h1>
      <Outlet />
    </>
  );
};

export default Layout;
