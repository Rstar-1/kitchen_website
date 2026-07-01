import React from "react";
import Container from "../../../utility/Container";
import CountUp from "../../../utility/Countup";

const Section5 = ({ addToRef }) => {
  const stats = [
    {
      value: 10,
      label: "Years of Industry Experience",
    },
    {
      value: 16,
      label: "Premium PVC Products",
    },
    {
      value: 100,
      label: "Quality Satisfaction Rate (%)",
    },
    {
      value: 500,
      label: "Wholesale & Retail Clients",
    },
  ];

  return (
    <Container version="v3" className="bg-tertiary">
      <div className="w-full py-60 sm-py-40">
        <div className="px-15 sm-px-5">
          <div className="flex sm-block items-center w-full">
            <div className="w-40 sm-w-full">
              <p className="text-gray headpara-text">Why Choose Us</p>
              <h4 className="large-text text-dark font-500 pt-10">
                Ashmita Enterprises in Numbers
              </h4>
            </div>
            <div className="w-60 sm-w-full sm-mt-10">
              <p className="headpara-text text-gray font-400">
                Ashmita Enterprises is a premier importer, wholesaler, trader, and retailer of PVC strip curtains, rolls, sheets, films, and mounting brackets, offering high-quality solutions for industrial, cold storage, and retail clients.
              </p>
            </div>
          </div>
          <div className="grid-cols-4 md-grid-cols-2 sm-grid-cols-2 gap-12 mt-60 sm-mt-30">
            {stats.map((item, index) => (
              <div key={index}>
                <div className="sm-mb-20">
                  <h4 className="large-text font-500 text-dark">
                    <CountUp end={item.value} duration={2000} />+
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
