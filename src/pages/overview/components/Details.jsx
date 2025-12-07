import React from "react";
import Container from "../../../utility/Container";

const Details = () => {
    const specs = [
      { label: "Operating Range", value: "10–80% RH" },
      { label: "Operating Temperature", value: "5–35°C" },
      { label: "Weight", value: "7.5 kg" },
      { label: "Input Voltage", value: "220–240V" },
      { label: "Warranty", value: "1 Year" },
      { label: "Print Technology", value: "Laser" },
      { label: "Duty Cycle", value: "10,000 pages" },
      { label: "Noise Level", value: "48 dB" },
      { label: "Power Consumption", value: "350W" },
      { label: "Dimensions", value: "400 × 300 × 200 mm" },
      { label: "Weight", value: "7.5 kg" },
      { label: "Input Voltage", value: "220–240V" },
      { label: "Warranty", value: "1 Year" },
    ];

  return (
    <Container version="v2" className="bg-white">
      <div className="w-full py-40 bordb">
        <div class="flex flex-wrap items-center gap-8 w-full">
          <svg
            width="18"
            height="15"
            viewBox="0 0 18 15"
            fill="none"
            className="flex"
          >
            <path
              d="M1.8125 7.90625L3 6.9375V14C3 14.2708 3.09375 14.5 3.28125 14.6875C3.48958 14.8958 3.72917 15 4 15H7C7.27083 15 7.5 14.8958 7.6875 14.6875C7.89583 14.5 8 14.2708 8 14V10H10V14C10 14.2708 10.0938 14.5 10.2812 14.6875C10.4896 14.8958 10.7292 15 11 15H14C14.2708 15 14.5 14.8958 14.6875 14.6875C14.8958 14.5 15 14.2708 15 14V6.9375L16.1875 7.90625C16.2708 7.96875 16.375 8 16.5 8C16.6667 8 16.8021 7.9375 16.9062 7.8125C17.0938 7.54167 17.0625 7.30208 16.8125 7.09375L9.3125 1.09375C9.10417 0.947917 8.89583 0.947917 8.6875 1.09375L6 3.25V2C6 1.72917 5.89583 1.5 5.6875 1.3125C5.5 1.10417 5.27083 1 5 1C4.72917 1 4.48958 1.10417 4.28125 1.3125C4.09375 1.5 4 1.72917 4 2V4.84375L1.1875 7.09375C0.9375 7.30208 0.90625 7.54167 1.09375 7.8125C1.30208 8.0625 1.54167 8.09375 1.8125 7.90625ZM9 2.125L14 6.125V14H11V9H7V14H4V6.15625L9 2.125Z"
              fill="var(--primarytext)"
            ></path>
          </svg>
          <p className="para-text cursor-pointer text-primary mt-3">Home</p>
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            stroke="var(--primarytext)"
            strokeWidth="2"
            fill="none"
            className="flex text-primary"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
          <p className="para-text text-primary mt-3">Product</p>
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            stroke="gray"
            strokeWidth="2"
            fill="none"
            className="flex"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
          <p className="para-text text-gray mt-3">
            Category
          </p>
        </div>
        <div className="grid-cols-2 gap-12 mt-26">
          <div className="w-full flex items-start gap-12">
            <div className="w-20 grid-cols-1 gap-12">
              <img
                src="https://image3.jdomni.in/banner/11012020/EF/BD/28/4C4AF35220C924CBD9B56122F9_1578734578596.jpg?output-format=webp"
                className="w-full h-100px object-contain flex rounded-5 bg-white border-primary"
                alt="kk"
              />
              <img
                src="https://image3.jdomni.in/banner/11012020/EF/BD/28/4C4AF35220C924CBD9B56122F9_1578734578596.jpg?output-format=webp"
                className="w-full h-100px object-contain flex rounded-5 bg-white border-forth"
                alt="kk"
              />
              <img
                src="https://image3.jdomni.in/banner/11012020/EF/BD/28/4C4AF35220C924CBD9B56122F9_1578734578596.jpg?output-format=webp"
                className="w-full h-100px object-contain flex rounded-5 bg-white border-forth"
                alt="kk"
              />
            </div>
            <div className="w-80">
              <img
                src="https://image3.jdomni.in/banner/11012020/EF/BD/28/4C4AF35220C924CBD9B56122F9_1578734578596.jpg?output-format=webp"
                className="w-full h-450 object-contain flex rounded-5 bg-white border-forth"
                alt="kk"
              />
            </div>
          </div>
          <div className="px-10 py-5">
            <p class="border-primary text-primary small-text font-400 w-max px-12 py-4 mb-20">
              40 Stock
            </p>
            <h3 className="head-text text-dark font-600">
              HP 18A Black Original Laserjet Toner Cartridge (CF218A)
            </h3>
            <p className="para-text text-gray font-400 line-clamp2 mt-16">
              The HP 18A Black Original Laserjet Toner Cartridge (CF218A) ?a
              high-quality printing solution designed for HP printers. This
              genuine HP product ensures exceptional reliability and
              professional results for all your printing needs. With its
              impressive yield of up to 1,400 pages, this toner cartridge
              guarantees a consistent and long-lasting performance, making it
              ideal for both home and office use.
            </p>
            <h3 className="title-text text-dark font-600 pt-30">
              ₹2,000 - ₹3,000
            </h3>
            <div class="grid-cols-2 w-80 sm-w-full gap-12 mt-20">
              <button class="cursor-pointer w-full py-8 para-text font-400 text-white bg-primary border-0">
                Call Now
              </button>
              <button class="cursor-pointer w-full py-8 para-text font-400 text-primary border-primary">
                Message
              </button>
            </div>
          </div>
        </div>
        <div className="mt-20 w-90 grid grid-cols-2 gap-12">
          {specs.map((item, index) => (
            <div className="flex w-full" key={index}>
              <div className="p-10 w-35 border-forth">
                <p className="small-text text-dark font-600">{item.label}</p>
              </div>
              <div className="p-10 w-65 border-forth">
                <p className="small-text text-gray">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Details;
