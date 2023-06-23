import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInsights from "../editorsInsights/EditorsInsights";

const News = () => {
  const news = useLoaderData();

  const {
    _id,
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    image_url,
    details,
  } = news;
  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div className="bg-gray-100 p-2">
        <h2 className="text-2xl font-bold">Dragon News</h2>
      </div>
      <div className="p-2">
        <img src={image_url} alt="" className="object-cover w-full" />
        <h2 className="font-bold text-2xl mt-5">{title}</h2>
        <p className="text-gray-700 mt-5">{details}</p>
        <Link to="">
          <button className="bg-red-500 px-4 py-1 my-5 rounded-sm text-white flex items-center space-x-2">
            <FaArrowLeft className="mr-2" /> All news in this category
          </button>
        </Link>
      </div>
      <div className="">
        <EditorsInsights />
      </div>
      <div className="p-4 bg-gray-100">
        <p className="text-gray-500"></p>
      </div>
    </div>
  );
};

export default News;
