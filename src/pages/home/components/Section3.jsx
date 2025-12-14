import React from "react";
import Container from "../../../utility/Container";

const Section3 = ({ addToRef }) => {
  const workSteps = [
    {
      aboutText:
        "Sociis varius nisl eu ipsum faucibus. Ac semper nisl turpis diam libero id ante nullam. Tellus. Sociis varius nisl eu ipsum faucibus. Ac semper nisl turpis diam libero id ante nullam. Tellus.",
    },
    {
      aboutText:
        "Sociis varius nisl eu ipsum faucibus. Ac semper nisl turpis diam libero id ante nullam. Tellus.",
    },
    {
      aboutText:
        "Sociis varius nisl eu ipsum faucibus. Ac semper nisl turpis diam libero id ante nullam. Tellus. Sociis varius nisl eu ipsum faucibus. Ac semper nisl turpis diam libero id ante nullam. Tellus.",
    },
  ];
  const printItems = [
    "Bussiness Card",
    "POSTER & BANNER",
    "BROCHURE",
    "Card",
    "CUSTOM INVITATION",
    "APPAREL PRINTING",
  ];

  return (
    <Container version="v3" className="bg-white">
      <div className="w-full py-60 sm-py-30">
        <div className="flex sm-block px-15 sm-px-5">
          <div className="w-30 sm-w-85 pr-20 sm-pr-1">
            <div
              className="bg-secondary w-full h-400 relative overflow-hidden rounded-5"
              style={{
                backgroundImage:
                  'url("https://printshop.tokotema.com/wp-content/uploads/2023/08/Hero-Line-Bg.png")',
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right bottom",
              }}
            >
              <img
                src="https://printshop.tokotema.com/wp-content/uploads/2023/08/man-close-up-with-headphones-smiling-2021-08-26-20-17-00-utc-1-1.png"
                alt="arrow"
                className="w-full absolute top-0 right-0 h-500 sm-h-550 object-contain flex"
              />
            </div>
          </div>
          <div className="w-70 sm-w-full pl-20 sm-pl-1 sm-mt-30">
            <p className="text-gray headpara-text" ref={addToRef}>
              About Us
            </p>
            <h4 className="large-text text-darkk font-600 pt-10" ref={addToRef}>
              Excellence
            </h4>
            <div className="grid-cols-1 gap-12 mt-40 sm-mt-30 pl-30 sm-pl-1">
              {workSteps?.map((item, index) => (
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

                  <p className="midpara-text text-gray w-90">
                    {item.aboutText}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-28 w-90 sm-w-full">
          <div className="px-15 sm-px-10">
            <h4 className="head-text text-gray font-500">Category</h4>
            <div
              className="flex items-center gap-12 flex-wrap mt-26"
              ref={addToRef}
            >
              {printItems.map((item, index) => (
                <React.Fragment key={index}>
                  <p className="midpara-text text-gray rounded-20 px-20 py-6 border-forth mb-8">
                    {item}
                  </p>
                  {index !== printItems.length - 1 && (
                    <img
                      src="https://printshop.tokotema.com/wp-content/uploads/2023/08/Icon-1.png"
                      alt="star"
                      className="flex object-contain mb-8"
                      style={{ width: "35px", height: "35px" }}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Section3;
