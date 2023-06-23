import React, { useContext } from "react";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import Logo from "../../../../assets/logo/logo.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(() => {});
  };
  return (
    <div className="text-center py-8">
      <img src={Logo} alt="" className="mx-auto h-10" />
      <p>
        <small>Journalism Without Fear or Favour</small>
      </p>
      <p className="font-bold">{moment().format("LLLL")}</p>

      <div className="bg-zinc-100 p-2 md:mx-20 md:my-5 rounded-md inline-flex my-2">
        <button className="bg-red-500 hover:bg-red-700 px-4 rounded-md font-bold text-white flex items-center flex-start">
          Latest
        </button>
        <h4 className="p-2 font-bold">
          <Marquee speed={50}>
            I can be a React component, multiple React components, or just some
            text.
          </Marquee>
        </h4>
      </div>
      <div className="md:flex md:mx-20 justify-between">
        <div className="">
          {" "}
          {user ? <>Welcome: {user.email}</> : "Please Login !!!"}
        </div>
        <div className="space-x-4">
          <NavLink className={`animate-pulse`} to="/category/0">
            Home
          </NavLink>
          <NavLink className={`animate-pulse`} to="/about">
            About
          </NavLink>
          <NavLink className={`animate-pulse`} to="/career">
            Career
          </NavLink>
        </div>
        <div className="inline-flex items-center space-x-2">
          {user ? (
            <>
              <img
                src="https://i.ibb.co/MgsDqCZ/FB-IMG-1678691214526.jpg"
                className="h-10 w-10 rounded-full border-solid border-2 border-zinc-200"
                alt="profile-picture"
              />
            </>
          ) : (
            <>
              <UserCircleIcon className="h-10 w-10 object-cover border-solid border-4 border-zinc-200 rounded-full" />
            </>
          )}

          <Link to="/register">
            <button className="bg-slate-600 px-3 py-1 rounded-sm text-white">
              Register
            </button>
          </Link>

          {user ? (
            <>
              <Link onClick={handleLogOut}>
                <button className="bg-red-600 px-3 py-1 rounded-sm text-white">
                  Log out
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="bg-slate-600 px-3 py-1 rounded-sm text-white">
                  Log in
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
