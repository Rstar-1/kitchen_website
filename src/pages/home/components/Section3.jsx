import React from "react";
import Container from "../../../utility/Container";

const Section3 = () => {
  const stats = [
    {
      value: "10+",
      label: "Years of Experience",
      bg: "bg-secondary",
    },
    {
      value: "150+",
      label: "Trusted Brands Worldwide",
      bg: "bg-warning",
    },
    {
      value: "100%",
      label: "Customer Satisfaction Rate",
      bg: "bg-success",
    },
    {
      value: "50K+",
      label: "Products Sold",
      bg: "bg-warning",
    },
  ];

  return (
    <Container version="v2" className="bg-white">
      <div className="w-full py-30 bordb">
        <div className="grid-cols-4 md-grid-cols-2 sm-grid-cols-1 gap-12">
          {stats.map((item, index) => (
            <div key={index}>
              <div className={`${item.bg} rounded-10 p-30`}>
                <h4 className="head-text font-600 text-dark">{item.value}</h4>
                <p className="para-text mt-4 text-gray">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Section3;
