import React from "react";

import QZoneOne from "../../../../assets/images/qZone1.png";
import QZoneTwo from "../../../../assets/images/qZone2.png";
import QZoneThree from "../../../../assets/images/qZone3.png";

const QZone = () => {
  return (
    <div className="bg-zinc-100 grid grid-cols-1 justify-center rounded-sm p-2">
      <h2 className="text-2xl font-bold mb-4">Q-Zone</h2>
      <div className="mb-4 w-full">
        <img
          src={QZoneOne}
          alt="q-zone-image"
          className="w-full object-cover"
        />
      </div>
      <div className="mb-4 w-full">
        <img
          src={QZoneTwo}
          alt="q-zone-image"
          className="w-full object-cover"
        />
      </div>
      <div className="mb-4 w-full">
        <img
          src={QZoneThree}
          alt="q-zone-image"
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};

export default QZone;
