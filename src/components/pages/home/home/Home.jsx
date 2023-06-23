import React from "react";
import "./Home.css";
import LeftNav from "../../shared/leftNav/LeftNav";
import RightNav from "../../shared/rightNav/RightNav";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-8 md:px-20 lg:px-20 gap-4 p-2">
      <div className="md:col-span-2 p-2 border border-slate-50 rounded-sm">
        <LeftNav />
      </div>
      <div className="md:col-span-4 p-2 border border-slate-50 rounded-sm">
        <Outlet />
      </div>
      <div className="md:col-span-2 p-2 border border-slate-50 rounded-sm">
        <RightNav />
      </div>
    </div>
  );
};

export default Home;
