import React from "react";
import Banner from "./components/Banner";
import Patch from "./components/Patch";
import About from "./components/About";
import Review from "./components/Review";
import Slider from "./components/slider";

const Home = () => {
  return (
    <div>
      <div className="w-full bg-tertiary">
        <Banner />
      </div>
      <div className="py-40 w-full">
        <div className="container2">
          <Patch />
        </div>
      </div>
      <div
        className="py-20 w-full"
        style={{
          background:
            'url("https://nunforest.com/koad-demo/upload/banners/ban3.jpg")',
        }}
      >
        <div className="container2">
          <Review />
        </div>
      </div>
      <div className="py-40 w-full">
        <div className="container2">
          <About />
        </div>
      </div>
      <div className="">
        <Slider />
      </div>
    </div>
  );
};

export default Home;
