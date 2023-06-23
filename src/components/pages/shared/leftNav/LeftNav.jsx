import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./LeftNav.css";
import editorInsightOne from "../../../../assets/images/1.png";
import editorInsightTwo from "../../../../assets/images/2.png";
import editorInsightThree from "../../../../assets/images/3.png";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  const [isActive, setIsActive] = useState("");
  
  useEffect(() => {
    fetch(
      "https://the-news-dragon-server-paulbishwajit09-gmailcom.vercel.app/categories"
    )
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="">
      <div className="bg-zinc-100 p-2 mb-2 rounded-sm">
        <h2 className="text-2xl font-bold">All Categories</h2>
      </div>
      <div className="md:p-4">
        {categories.map((category) => (
          <p className="py-2  block" key={category.id}>
            <NavLink
              className={`({ isActive }) => (isActive ? "active" : "") animate-pulse`}
              to={`/category/${category.id}`}
            >
              {category.name}
            </NavLink>
          </p>
        ))}
      </div>
      <div className="mt-4">
        <div className="grid-cols-1 mb-5 rounded-md">
          <img
            src={editorInsightOne}
            alt=""
            className="rounded-md object-cover w-full"
          />
          <div className="p-2">
            <h2 className="font-bold mt-2">
              Halo, GTA Vice City Actor Directing Movie About Hunter Biden
            </h2>
          </div>
        </div>
        <div className="grid-cols-1 mb-5 rounded-md">
          <img
            src={editorInsightTwo}
            alt=""
            className="rounded-md object-cover w-full"
          />
          <div className="p-2">
            <h2 className="font-bold mt-2">
              U.S. announces largest weapons package for Ukraine
            </h2>
          </div>
        </div>
        <div className="grid-cols-1 mb-5 rounded-md">
          <img
            src={editorInsightThree}
            alt=""
            className="rounded-md object-cover w-full"
          />
          <div className="p-2">
            <h2 className="font-bold mt-2">
              Zelensky says he had ‘great conversation' with Biden, discussed
              Kiev's further steps
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
