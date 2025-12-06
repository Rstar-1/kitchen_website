import React from "react";
import Container from "../../../utility/Container";

const Section3 = () => {
  const stats = [
    {
      value: "240 +",
      label: "Years of Experience",
      bg: "bg-primary",
    },
    {
      value: "150 +",
      label: "Trusted Brands",
      bg: "bg-warning",
    },
    {
      value: "100 %",
      label: "Satisfaction Rate",
      bg: "bg-primary",
    },
    {
      value: "100 %",
      label: "Satisfaction Rate",
      bg: "bg-success",
    },
  ];

  return (
    <Container version="v2" className="bg-white">
      <div className="w-full py-30 bordb">
        <div className="grid-cols-4 gap-12">
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
