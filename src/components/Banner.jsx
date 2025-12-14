import React from "react";
import Container from "../utility/Container";
import useFadeReveal from "../utility/Fade";

const Banner = ({ title = "", description = "", widthClass = "w-50" }) => {
  const bannerToRef = useFadeReveal({ delay: 200, y: 30 });

  return (
    <Container version="v2" className="bg-tertiary">
      <div className="w-full py-80 sm-py-50">
        <div className={`${widthClass} sm-w-full`}>
          {title && (
            <h2 className="head-text text-dark" ref={bannerToRef}>
              {title}
            </h2>
          )}
          {description && (
            <p className="text-gray para-text mt-14 sm-mt-8" ref={bannerToRef}>
              {description}
            </p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Banner;
