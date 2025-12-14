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
              Let's Bring Your Ideas to Life
            </h4>
            <p
              className="headpara-text text-gray font-400 sm-w-full w-90 mt-25 sm-mt-15"
              ref={addToRef}
            >
              Scelerisque in dolor donec neque velit. Risus aenean integer
              elementum odio sed adipiscing. Sem id scelerisque nunc quis.
              Imperdiet nascetur consequat.
            </p>
          </div>
          <div className="w-50 sm-w-full pl-20 sm-pl-1 sm-mt-25">
            <div
              className="bg-secondary w-full h-450 sm-h-350 relative overflow-hidden rounded-5 mb-minus"
              style={{
                backgroundImage:
                  'url("https://printshop.tokotema.com/wp-content/uploads/2023/08/Hero-Line-Bg.png")',
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right bottom",
              }}
            >
              <img
                src="https://printshop.tokotema.com/wp-content/uploads/2023/08/Mockup-of-a-Smiling-Woman-Wearing-an-Embroidered-768x951.png"
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
              <p className="para-text text-gray mt-6">+91-9867264193</p>
            </div>
            <div className="mx-20 sm-mx-1">
              <h4 className="title-text text-dark font-500">Email Us</h4>
              <p className="para-text text-gray mt-6">
                mayur.computers2012@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Section4;
