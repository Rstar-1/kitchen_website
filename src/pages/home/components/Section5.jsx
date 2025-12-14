import React from "react";
import Container from "../../../utility/Container";

const Section5 = ({ addToRef }) => {
  const stats = [
    {
      value: "10+",
      label: "Years of Experience",
    },
    {
      value: "10+",
      label: "Trusted Brands Worldwide",
    },
    {
      value: "99%",
      label: "Customer Satisfaction Rate",
    },
    {
      value: "50K",
      label: "Products Sold",
    },
  ];

  return (
    <Container version="v3" className="bg-tertiary">
      <div className="w-full py-60 sm-py-40">
        <div className="px-15 sm-px-5">
          <div className="flex sm-block items-center w-full">
            <div className="w-40 sm-w-full">
              <p className="text-gray headpara-text">Why Us</p>
              <h4 className="large-text text-dark font-500 pt-10">
                Printshop in Number
              </h4>
            </div>
            <div className="w-60 sm-w-full sm-mt-10">
              <p className="headpara-text text-gray font-400">
                Sociis varius nisl eu ipsum faucibus. Ac semper nisl turpis diam
                libero id ante nullam. Tellus. Sociis varius nisl eu ipsum
                faucibus. Ac semper nisl turpis diam libero id ante nullam.
                Tellus.
              </p>
            </div>
          </div>
          <div
            className="grid-cols-4 md-grid-cols-2 sm-grid-cols-2 gap-12 mt-60 sm-mt-30"
            ref={addToRef}
          >
            {stats.map((item, index) => (
              <div key={index}>
                <div className="sm-mb-20">
                  <h4 className="large-text font-500 text-dark">
                    {item.value}
                  </h4>
                  <p className="para-text mt-4 text-gray">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Section5;
