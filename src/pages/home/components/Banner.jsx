import React from "react";

const Banner = () => {
  return (
    <div className="flex items-center w-full">
      <div className="w-50 pl-35 pr-10">
        <h2 className="head-text text-forth">
          We do not cook, we create your emotions!
        </h2>
        <p className="para-text text-gray w-80 mt-15">
          Lorem ipsum is a dummy or placeholder text commonly used in graphic
          design, publishing, and web development.
        </p>
      </div>
      <div className="w-50">
        <img
          src="https://cdn.media.amplience.net/i/canon/pro-inside-professional-food-photography-1_46a998f373b44dc583ee52d9448ece04?$media-collection-full-dt-jpg$"
          alt="banner-1"
          className="w-full object-cover h-500 flex"
        />
      </div>
    </div>
  );
};

export default Banner;
