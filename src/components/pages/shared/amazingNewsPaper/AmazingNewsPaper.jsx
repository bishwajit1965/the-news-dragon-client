import React from "react";
import AmazingNewsBgImage from "../../../../assets/images/bg1.png";

const AmazingNewsPaper = () => {
  return (
    <div className="relative mt-5">
      <img src={AmazingNewsBgImage} alt="" className="w-full object-cover" />
      <div className="absolute top-0 left-0 text-white my-10 p-6">
        <h2 className="text-3xl font-bold text-center">
          Create an Amazing Newspaper
        </h2>
        <p className=" text-white py-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          provident fugiat aut saepe. Quisquam temporibus pariatur officia.
          Eaque.
        </p>
        <div className="text-center mt-4">
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-sm">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AmazingNewsPaper;
