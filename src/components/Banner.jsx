import React from "react";
import Container from "../utility/Container";

const Banner = ({
  title = "",
  description = "",
  widthClass = "w-50",
}) => {
  return (
    <Container version="v2" className="bg-warning">
      <div className="w-full py-80">
        <div className={widthClass}>
          {title && <h2 className="head-text text-dark">{title}</h2>}
          {description && (
            <p className="text-gray para-text mt-14">{description}</p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Banner;
