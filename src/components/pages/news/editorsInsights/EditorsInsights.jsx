import React from "react";

import editorInsightOne from "../../../../assets/images/1.png";
import editorInsightTwo from "../../../../assets/images/2.png";
import editorInsightThree from "../../../../assets/images/3.png";
const EditorsInsights = () => {
  return (
    <div className="p-2">
      <h2 className="text-2xl font-bold">Editor's Insight</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-between mt-2">
        <div className="grid-cols-1 rounded-md shadow-lg mb-2">
          <img
            src={editorInsightOne}
            alt=""
            className="rounded-md object-cover w-full"
          />
          <div className="p-2">
            <h2 className="font-bold">
              Halo, GTA Vice City Actor Directing Movie About Hunter Biden
            </h2>
          </div>
        </div>
        <div className="grid-cols-1 rounded-md shadow-lg mb-2">
          <img
            src={editorInsightTwo}
            alt=""
            className="rounded-md object-cover w-full"
          />
          <div className="p-2">
            <h2 className="font-bold">
              U.S. announces largest weapons package for Ukraine
            </h2>
          </div>
        </div>
        <div className="grid-cols-1 rounded-md shadow-lg mb-2">
          <img
            src={editorInsightThree}
            alt=""
            className="rounded-md object-cover w-full"
          />
          <div className="p-2">
            <h2 className="font-bold">
              Zelensky says he had ‘great conversation' with Biden, on Kiev's
              steps
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorsInsights;
