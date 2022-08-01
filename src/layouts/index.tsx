import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
//@import components
import Socials from "components/Socials";
//@import layouts
import Header from "./header";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    nprogress.start();
    nprogress.done();
  }, [location.pathname]);

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
