import React from "react";
import Nav from "../globals/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../globals/Footer";

function Route() {
  return (
    <div
      className="flex flex-col w-full min-h-screen overflow-x-hidden"
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Nav />
      <div className="grow pb-20" style={{ flex: "1 0 auto" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Route;
