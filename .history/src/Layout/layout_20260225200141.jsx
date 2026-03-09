import React from "react";
import Home from "./home";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Home />
      <Outlet />
      <Footer />
    </div>
  );
}
