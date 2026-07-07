import React from "react";
import Container from "../../../utility/Container";

const Section4 = ({ addToRef }) => {
  return (
    <Container version="v0" className="bg-tertiary">
      <div className="w-full pt-60 sm-pt-40">
        <div className="flex sm-block px-30 sm-px-15 pb-60 sm-pb-40">
          <div className="w-50 sm-w-full pr-20 sm-pr-1">
            <p className="text-gray midpara-text" ref={addToRef}>
              Call To Action
            </p>
            <h4
              className="large-text text-dark font-600 w-90 pt-10"
              ref={addToRef}
            >
              Partner with Ashmita Vinyls Today
            </h4>
            <p
              className="headpara-text text-gray font-400 sm-w-full w-90 mt-25 sm-mt-15"
              ref={addToRef}
            >
              Contact our sales and manufacturing team for custom PVC dimensions, wholesale orders, and export inquiries worldwide.
            </p>
          </div>
          <div className="w-50 sm-w-full pl-20 sm-pl-1 sm-mt-25">
            <div
              className="bg-secondary w-full h-450 sm-h-350 relative overflow-hidden rounded-5 mb-minus"
              style={{
                backgroundImage:
                  'url("https://raw.githubusercontent.com/Rstar-1/generic/refs/heads/main/mayur/img/side1.png")',
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right bottom",
              }}
            >
              <img
                src="https://raw.githubusercontent.com/Rstar-1/generic/refs/heads/main/mayur/img/connect1.png"
                alt="arrow" 
                className="w-full absolute top-0 right-0 h-600 sm-h-450 object-contain flex"
              />
            </div>
          </div>
        </div>
        <div className="bg-white w-full pt-40 pb-60 sm-pt-25 sm-pb-25">
          <div className="flex sm-grid-cols-1 px-30 sm-px-15 items-center gap-12">
            <div>
              <h4 className="title-text text-dark font-500">Contact Us</h4>
              <a href="tel:+918511700544" className="para-text text-gray mt-6">
                +91 85117 00544
              </a>
            </div>
            <div className="mx-20 sm-mx-1">
              <h4 className="title-text text-dark font-500">Email Us</h4>
              <a
                href="mailto:info@ashmitavinyls.com"
                aria-label="Send email to info@ashmitavinyls.com"
                className="para-text text-gray mt-6"
              >
                info@ashmitavinyls.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Section4;
