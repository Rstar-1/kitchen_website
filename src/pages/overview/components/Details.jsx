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
        <div className="grid-cols-2 gap-12">
          <div className="w-full flex items-start gap-12">
            <div className="w-20 grid-cols-1 gap-12">
              <img
                src="https://image3.jdomni.in/banner/11012020/EF/BD/28/4C4AF35220C924CBD9B56122F9_1578734578596.jpg?output-format=webp"
                className="w-full h-100px object-contain flex rounded-5 bg-white border-secondary"
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
            <p class="border-secondary text-secondary small-text font-400 w-max px-12 py-4 mb-20">
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
            <h3 className="title-text text-dark font-600 pt-30">₹2,000 - ₹3,000</h3>
            <div class="grid-cols-2 w-80 sm-w-full gap-12 mt-20">
              <button class="cursor-pointer w-full py-8 para-text font-400 text-white bg-danger border-0">
                Call Now
              </button>
              <button class="cursor-pointer w-full py-8 para-text font-400 text-danger border-danger">
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
