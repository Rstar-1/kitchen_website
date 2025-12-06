import React from "react";
import Container from "../../../utility/Container";

const HeroBanner = () => {
  return (
    <Container version="v3" className="bg-forth">
      <div className="relative bg-white rounded-10 overflow-hidden p-10">
        <div className="flex items-center w-full ">
          <div className="w-50 pl-30">
            <p className="text-primary headpara-text mb-12">
              Bring Your Colors to Life.
            </p>
            <h1 className="large-text text-dark font-600 uppercase">
              Quality Prints Start Here.
            </h1>
            <p className="text-gray midpara-text mt-30">
              Bring your documents and photos to life. Vibrant colors, deep
              blacks, and flawless print clarity.
            </p>
          </div>
          <img
            src="https://prinoz-next.vercel.app/images/hero/hero-1.jpg"
            className="object-cover h-500 flex w-50 rounded-10"
          />
        </div>
        <div className="absolute bottom-0 flex justify-center w-full">
          <img
            src="https://prinoz-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FScroll_Down.f1ef9348.png&w=384&q=75"
            className="object-contain flex"
          />
        </div>
      </div>
    </Container>
  );
};

export default HeroBanner;
