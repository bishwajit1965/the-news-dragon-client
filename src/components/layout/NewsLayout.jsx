import React from "react";
import { Outlet } from "react-router-dom";

const NewsLayout = () => {
  return (
    <div className="">
      <Outlet />
    </div>
  );
};

export default NewsLayout;
