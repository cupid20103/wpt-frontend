import { Outlet } from "react-router-dom";
//@import layouts
import Header from "./header";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Layout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default Layout;