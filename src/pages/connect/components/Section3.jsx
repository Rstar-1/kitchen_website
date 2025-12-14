import React from "react";
import Container from "../../../utility/Container";

const Section3 = ({ addToRef }) => {
  const faqSteps = [
    {
      faqText:
        "Sociis varius nisl eu ipsum faucibus. Ac semper nisl turpis diam libero id ante nullam. Tellus. Sociis varius nisl eu ipsum faucibus. Ac semper nisl turpis diam libero id ante nullam. Tellus.",
    },
    {
      faqText:
        "Sociis varius nisl eu ipsum faucibus. Ac semper nisl turpis diam libero id ante nullam. Tellus.",
    },
    {
      faqText:
        "Sociis varius nisl eu ipsum faucibus. Ac semper nisl turpis diam libero id ante nullam. Tellus. Sociis varius nisl eu ipsum faucibus. Ac semper nisl turpis diam libero id ante nullam. Tellus.",
    },
    {
      faqText:
        "Sociis varius nisl eu ipsum faucibus. Ac semper nisl turpis diam libero id ante nullam. Tellus. Sociis varius nisl eu ipsum faucibus. Ac semper nisl turpis diam libero id ante nullam. Tellus.",
    },
    {
      faqText:
        "Sociis varius nisl eu ipsum faucibus. Ac semper nisl turpis diam libero id ante nullam. Tellus.",
    },
    {
      faqText:
        "Sociis varius nisl eu ipsum faucibus. Ac semper nisl turpis diam libero id ante nullam. Tellus. Sociis varius nisl eu ipsum faucibus. Ac semper nisl turpis diam libero id ante nullam. Tellus.",
    },
  ];
  return (
    <Container version="v3" className="bg-tertiary">
      <div className="w-full py-40 sm-py-30">
        <div className="px-15 sm-px-5">
          <p className="text-gray headpara-text" ref={addToRef}>
            FAQ
          </p>
          <h4 className="large-text text-darkk font-600 pt-10" ref={addToRef}>
            Excellence
          </h4>
          <div className="grid-cols-2 sm-grid-cols-1 gap-12 mt-40 sm-mt-25 sm-w-full w-90">
            {faqSteps?.map((item, index) => (
              <div
                className="flex items-start w-full mb-16"
                ref={addToRef}
                key={index}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="var(--primary)"
                  strokeWidth="2"
                  fill="none"
                  className="flex w-10"
                >
                  <polyline points="15 10 20 15 15 20"></polyline>
                  <path d="M4 4v7a4 4 0 0 0 4 4h12"></path>
                </svg>

                <p className="midpara-text text-gray w-90">{item.faqText}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Section3;
