import React from "react";
import Container from "../../../utility/Container";

const HeroBanner = () => {
  return (
    <Container version="v3" className="bg-tertiary">
      <div className="w-full">
        <div className="flex sm-block items-center py-60 px-15">
          <div className="w-50 sm-w-full pr-20">
            <p className="text-primary headpara-text mb-15">Bring Your Life.</p>
            <h1 className="largehead-text text-dark font-600 uppercase">
              Quality is Prints Start Here.
            </h1>
            <p className="text-gray midpara-text mt-30 sm-mt-12">
              Bring your documents and photos to life. Vibrant colors, deep
              blacks, and flawless print clarity.
            </p>
          </div>
          <div className="w-50 sm-w-full pl-20">
            <div className="grid-cols-2 items-end gap-12 w-full">
              <div className="w-full">
                <div
                  className="bg-secondary p-30 rounded-5"
                  style={{
                    backgroundImage:
                      'url("https://printshop.tokotema.com/wp-content/uploads/2023/08/Hero-Line-Bg.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right bottom",
                  }}
                >
                  <h4 className="head-text text-white font-600">
                    Discover the Process Behind Our Work
                  </h4>
                  <img
                    src="https://printshop.tokotema.com/wp-content/uploads/2023/08/Arrow-Icon.png"
                    alt="arrow"
                    className="w-full flex mt-20"
                  />
                </div>
              </div>
              <div className="w-full relative">
                <img
                  src="https://printshop.tokotema.com/wp-content/uploads/2023/08/Hoodie-Mock-Up-Vol.2.jpg"
                  alt="hero-image"
                  className="h-400 w-full object-cover flex rounded-5"
                />
                <div className="mt-20 text-center">
                  <h4 className="head-text text-dark font-600">20K+</h4>
                  <p className="para-text text-gray font-400">Items Deliver</p>
                </div>
                <p
                  className="text-white bg-primary w-max px-25 py-6 rounded-20 midpara-text mb-15 absolute"
                  style={{ top: "8%", left: "-40%" }}
                >
                  Bring Your Life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroBanner;
