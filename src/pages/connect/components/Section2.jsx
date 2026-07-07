import React from "react";
import Container from "../../../utility/Container";

const Section2 = ({ addToRef }) => {
  return (
    <Container version="v3" className="bg-white">
      <div className="w-full py-40 sm-py-30">
        <div className="pb-40 grid-cols-1 gap-12 w-80 md-w-80 sm-w-full px-15 sm-px-5">
          <div className="flex items-start gap-6" ref={addToRef}>
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              stroke="gray"
              strokeWidth="2"
              fill="none"
              className="flex text-gray w-5 mt-2"
            >
              <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
              <line x1="8" y1="2" x2="8" y2="18"></line>
              <line x1="16" y1="6" x2="16" y2="22"></line>
            </svg>
            <p className="ml-3 midpara-text text-gray w-95">
              3rd Floor, C-304, Primus Neptune Eastern Business District, Lal Bahadur Shastri Marg, Bhandup West, Mumbai, Maharashtra 400078
            </p>
          </div>
          <div className="flex items-start gap-6 mt-10 sm-mt-15" ref={addToRef}>
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              stroke="gray"
              strokeWidth="2"
              fill="none"
              className="flex text-gray w-5 mt-2"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <a href="mailto:info@ashmitavinyls.com" className="w-95">
              <p className="ml-3 midpara-text text-gray">
                info@ashmitavinyls.com
              </p>
            </a>
          </div>
          <div className="flex items-start gap-6 mt-10 sm-mt-15" ref={addToRef}>
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              stroke="gray"
              strokeWidth="2"
              fill="none"
              className="flex text-gray w-5 mt-2"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <p className="ml-3 midpara-text text-gray w-95">
              Monday – Saturday: 10:00 AM – 7:00 PM (Sunday Closed)
            </p>
          </div>
          <div className="flex items-start gap-6 mt-10 sm-mt-15" ref={addToRef}>
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              stroke="gray"
              strokeWidth="2"
              fill="none"
              className="flex text-gray w-5 mt-2"
            >
              <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <div className="w-95 flex sm-grid-cols-1 items-center gap-12">
              <a href="tel:+918511700544">
                <p className="ml-3 midpara-text text-gray">+91 85117 00544</p>
              </a>
            </div>
          </div>
        </div>
        <div className="px-15 sm-px-5" ref={addToRef}>
          <iframe
            className="w-full border-0 mt-8"
            title="map"
            height={350}
            loading="lazy"
            allowFullScreen
            src="https://maps.google.com/maps?q=Neptune%20Eastern%20Business%20District,%20Bhandup%20West,%20Mumbai&t=&z=15&ie=UTF8&iwloc=&output=embed"
          />
        </div>
      </div>
    </Container>
  );
};

export default Section2;
