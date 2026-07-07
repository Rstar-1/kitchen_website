import React from "react";
import Container from "../../../utility/Container";
import useFadeReveal from "../../../utility/Fade";

const HeroBanner = () => {
  const heroToRef = useFadeReveal({ delay: 150, y: 30 });

  return (
    <Container version="v3" className="bg-tertiary bg_hero">
      <div className="w-full">
        <div className="flex sm-block items-center py-60 sm-py-40 px-15 sm-px-5">
          <div className="w-50 sm-w-full pr-20 sm-pr-1">
            <p className="text-warning headpara-text mb-15" ref={heroToRef}>
              Ashmita Vinyls Private Limited
            </p>
            <h1
              className="largehead-text text-dark font-600 uppercase"
              ref={heroToRef}
            >
              PVC & Fabric Products
            </h1>
            <p
              className="text-gray midpara-text mt-30 sm-mt-12"
              ref={heroToRef}
            >
              Premier manufacturer, fabric supplier, and dealer of high-quality PVC coated tarpaulins, wall panels, clear sheeting, table covers, and strip curtains.
            </p>
          </div>
          <div className="w-50 sm-w-full pl-20 sm-pl-1 sm-mt-20">
            <div className="grid-cols-2 sm-grid-cols-2 items-end gap-12 w-full">
              <div className="w-full">
                <div
                  className="bg-secondary p-30 sm-p-16 rounded-5"
                  style={{
                    backgroundImage:
                      'url("https://raw.githubusercontent.com/Rstar-1/generic/refs/heads/main/mayur/img/side1.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right bottom",
                  }}
                >
                  <h4 className="head-text text-white font-600" ref={heroToRef}>
                    Explore Our PVC & Fabric Catalogue
                  </h4>
                </div>
              </div>
              <div className="w-full relative">
                <img
                  src="https://raw.githubusercontent.com/Rstar-1/generic/refs/heads/main/mayur/img/herosection1.jpg"
                  alt="hero-image"
                  className="h-400 sm-h-250 w-full object-cover flex rounded-5"
                />
                <div className="mt-20 text-center" ref={heroToRef}>
                  <h4 className="head-text text-dark font-600">Premium Grade</h4>
                  <p className="para-text text-gray font-400">Of Industry Excellence</p>
                </div>
                <p
                  className="text-white bg-primary w-max px-25 py-6 rounded-20 midpara-text mb-15 abs-hero"
                  ref={heroToRef}
                >
                  Ashmita Vinyls
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
