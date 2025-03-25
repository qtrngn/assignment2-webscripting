import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const Layout = () => {
  console.log("Layout loaded");

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
