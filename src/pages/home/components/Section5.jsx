import React from "react";
import Container from "../../../utility/Container";
import CountUp from "../../../utility/Countup";

const Section5 = ({ addToRef }) => {
  const stats = [
    {
      value: 75,
      label: "Years of Experience (Since 1951)",
    },
    {
      value: 3,
      label: "Global Export Countries (USA, UAE, BD)",
    },
    {
      value: 100,
      label: "Quality Satisfaction Rate",
    },
    {
      value: 20,
      label: "PVC Product Varieties",
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
                Wadhumal & Sons in Numbers
              </h4>
            </div>
            <div className="w-60 sm-w-full sm-mt-10">
              <p className="headpara-text text-gray font-400">
                Since 1951, Wadhumal & Sons has maintained a legacy of excellence in manufacturing heavy-duty PVC tarpaulins, transparent films, wall panels, and table covers with international delivery capabilities.
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
