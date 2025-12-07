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
  ];

  const consumables = [
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

  const FeaturedGrid = ({ title, list }) => (
    <div className="py-30 bordb">
      <div className="flex items-center justify-between w-full">
        <h2 className="title-text text-dark font-600">{title}</h2>
        <p className="text-primary para-text">View More</p>
      </div>
      <div className="w-full grid-cols-4 md-grid-cols-2 sm-grid-cols-1 gap-12 mt-20">
        {list.map((item, index) => (
          <div key={index}>
            <div className="bg-forth rounded-5 p-10">
              <img
                src={item.img}
                className="w-full h-200 object-contain flex rounded-5 bg-white"
                alt={item.title}
              />
            </div>
            <p className="para-text text-gray font-400 mt-8 px-2">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Container version="v2" className="bg-white">
      <div className="w-full py-10">
        <FeaturedGrid title="Laser Toner Cartridge" list={laserToner} />
        <FeaturedGrid title="Printer Consumables" list={consumables} />
      </div>
    </Container>
  );
};

export default Section2;
