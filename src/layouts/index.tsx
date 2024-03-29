import { Outlet } from "react-router-dom";
//@import components
import Socials from "components/Socials";
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
      <Socials />
    </>
  );
};

export default Layout;
