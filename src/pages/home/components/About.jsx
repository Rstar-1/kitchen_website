import React from "react";

const About = () => {
  return (
    <div className="flex items-center gap-12 w-full">
      <div className="w-50 pr-20">
        <img
          src="https://themewagon.github.io/chefs-kitchen-nextjs-free/images/hero/banner-image.png"
          alt="banner-1"
          className="w-full object-contain h-500 flex"
        />
      </div>
      <div className="w-50 pl-20">
        <h2 className="head-text text-forth">
          We do not cook, we create your emotions!
        </h2>
        <p className="para-text text-gray w-80 mt-15">
          Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.
        </p>
      </div>
    </div>
  );
};

export default About;
