import React from "react";
import Banner from "./components/Banner";
import Patch from "./components/Patch";
import About from "./components/About";

const Home = () => {
  return (
    <div>
      <div className="py-20 w-full">
        <div className="container2">
          <Banner />
        </div>
      </div>
      <div className="py-20 w-full">
        <div className="container2">
          <About />
        </div>
      </div>
      <div className="py-40 w-full">
        <div className="container2">
          <Patch />
        </div>
      </div>
    </div>
  );
};

export default Home;
