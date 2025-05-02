import React from "react";
import Marquee from "react-fast-marquee";
const LatestNews = () => {
  return (
    <div className="flex items-center gap-4 bg-base-200 p-4 my-8">
      <span className="bg-secondary px-4 py-2 font-medium text-white">
        Latest
      </span>
      <Marquee pauseOnHover="true" speed={100}>
        <p className="font-semibold text-accent-content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur,
          in.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
