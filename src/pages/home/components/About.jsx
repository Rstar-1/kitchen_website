import React from "react";

const About = () => {
  return (
    <div className="flex items-center w-full">
      <div className="w-50" style={{ background: "url(\"https://nunforest.com/koad-demo/upload/banners/ban3.jpg\")" }}>
        <img
          src="https://themewagon.github.io/chefs-kitchen-nextjs-free/images/hero/banner-image.png"
          alt="banner-1"
          className="w-full object-contain banner-img"
        />
      </div>
      <div className="w-50">
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
