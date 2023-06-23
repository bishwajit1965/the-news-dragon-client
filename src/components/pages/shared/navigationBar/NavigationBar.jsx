import React from "react";
import { Link, NavLink } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/24/solid";

const NavigationBar = () => {
  return (
    <div className="md:flex md:mx-20 justify-between sticky top-0 p-4">
      <div className=""></div>
      <div className="space-x-6">
        <NavLink className={`animate-pulse`} to="/">
          Home
        </NavLink>
        <NavLink className={`animate-pulse`} to="/about">
          About
        </NavLink>
        <NavLink className={`animate-pulse`} to="/career">
          Career
        </NavLink>
      </div>
      <div className="inline-flex items-center space-x-2 invisible md:visible">
        <UserCircleIcon className="h-10 w-10 text-slate-600" />
        <Link to="">
          <button className="bg-slate-600 px-3 py-1 rounded-sm text-white">
            Register
          </button>
        </Link>

        <Link>
          <button className="bg-slate-600 px-3 py-1 rounded-sm text-white">
            Log in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
