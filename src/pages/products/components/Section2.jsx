import React from "react";
import Container from "../../../utility/Container";

const Section2 = () => {
  const laserToner = [
    {
      img: "https://image3.jdomni.in/banner/11012020/EF/BD/28/4C4AF35220C924CBD9B56122F9_1578734578596.jpg?output-format=webp",
      title: "Samsung Cartridge",
    },
    {
      img: "https://image3.jdomni.in/banner/11012020/54/F2/20/0F6ECD6CE218C46FCABA6C0BCD_1578734962215.jpg?output-format=webp",
      title: "HP Cartridge",
    },
    {
      img: "https://image2.jdomni.in/banner/11012020/60/7C/82/C53DE2D8510194FF9F5FEB236C_1578735334533.jpeg?output-format=webp",
      title: "Canon Cartridge",
    },
    {
      img: "https://image3.jdomni.in/banner/11012020/F2/B7/01/BC9EA4A4CA18DE24E4B51EDE91_1578735459236.jpg?output-format=webp",
      title: "Brother Cartridge",
    },
    {
      img: "https://image3.jdomni.in/banner/11012020/BC/46/30/BA6E37F264A005E32578352B79_1578737150798.jpg?output-format=webp",
      title: "Ink Cartridge",
    },
    {
      img: "https://image3.jdomni.in/banner/11012020/43/B5/56/F0735B138A50B52F5DD9BD79D1_1578737259380.jpg?output-format=webp",
      title: "Toner Cartridge",
    },
    {
      img: "https://image2.jdomni.in/banner/11012020/76/FF/01/9CEADAE456395F429B509C5ACC_1578737405258.jpg?output-format=webp",
      title: "Ink Bottle",
    },
    {
      img: "https://image3.jdomni.in/banner/11012020/79/61/5A/0F7CF49026FBA1F5312B16C2E3_1578737848608.jpg?output-format=webp",
      title: "Ribbon Cartridge",
    },
  ];

  const options = [1000, 2000, 3000, 4000];
  const categories = [
    "Toner Cartridge",
    "Cartridge",
    "Cartridge Refilling Services",
    "Water Meters",
    "Used Computer Monitors",
    "Toner Refilling Services",
    "Toner",
    "Steel Plates",
    "Solar Water Pumping System",
    "Solar Lighting System",
    "Skin Care",
    "Ribbon Cartridges",
    "Printers",
    "POS Systems",
    "Mouse Pad",
    "LED Lightings",
    "Laptops",
    "Copier Toner",
    "CCTV DVR",
    "Computer Hardware",
    "Computer Imaging Systems",
    "Computer Keyboard",
    "Computer Monitor",
    "Computer Systems",
    "Desktop Computer",
    "Inkjet Cartridge",
    "Fanless Panel PC",
    "Industrial Panel Computer",
    "Ink Bottle",
    "Ink Cartridge",
    "Z Black Compatible Cartridge",
    "samsuang cartridge",
    "HP CARTRIDGES",
    "Other",
    "Overview",
  ];

  const ProductGrid = ({ list }) => (
    <div className="w-full grid-cols-3 gap-12">
      {list.map((item, index) => (
        <div key={index}>
          <div className="bg-forth p-10 rounded-5">
            <img
              src={item.img}
              className="w-full h-250 object-contain flex rounded-5 bg-white"
              alt={item.title}
            />
            <div className="mt-10 px-5 rounded-5">
              <p className="para-text text-dark font-500">{item.title}</p>
              <div className="flex items-center gap-12 mt-5">
                <p className="small-text text-gray font-400">
                  Price: <span className="font-600">₹2,717</span>
                </p>
                <p className="small-text text-gray font-400">
                  Min Qty: <span className="font-600">200</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <Container version="v2" className="bg-white">
      <div className="w-full py-30">
        <div className="flex items-start gap-12 w-full">
          <div className="w-20 grid-cols-1 gap-12">
            <div className="border-forth p-14 rounded-5">
              <p className="para-text bordb pb-10">Filter By</p>
              <div className="mt-8 bordb p-10 grid-cols-1 gap-12">
                {options.map((item) => (
                  <div key={item} className="flex items-center gap-8">
                    <input
                      type="checkbox" 
                    />
                    <p className="small-text text-gray">₹{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 bordb p-10 grid-cols-1 gap-12">
                {categories.map((category) => (
                  <div key={category} className="flex items-start gap-8">
                    <input type="checkbox" />
                    <p className="small-text text-gray">{category}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-80">
            <ProductGrid title="Laser Toner Cartridge" list={laserToner} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Section2;
