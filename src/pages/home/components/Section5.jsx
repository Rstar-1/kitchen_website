import React from "react";
import Container from "../../../utility/Container";

const Section5 = () => {
  const galleryImages = [
    {
      src: "https://image3.jdomni.in/banner/14012020/F0/46/E2/65CF16D344322CDB359090BFCD_1578985790310.jpg?output-format=webp",
      isImage: true,
    },
    {
      src: "https://image1.jdomni.in/banner/14012020/BF/80/F3/0F1E608F81B3C96E80EF5ACF64_1578985869162.jpg?output-format=webp",
      isImage: true,
    },
    {
      src: "https://image3.jdomni.in/banner/13012020/88/FD/6E/60487CE62F0AFA956D1453DD4D_1578918461151.jpg?output-format=webp",
      isImage: true,
    },
    {
      src: "https://image2.jdomni.in/banner/14012020/19/EF/AD/AE3C0FA0EE77F3677D05C92E29_1578985828913.jpg?output-format=webp",
      isImage: true,
    },
    {
      src: "https://image3.jdomni.in/banner/14012020/58/C0/B1/C0BAD1F977DCF9215019565DBB_1578985896587.jpg?output-format=webp",
      isImage: true,
    },
    {
      src: "https://image3.jdomni.in/banner/18032019/7E/D0/B5/F55B728FBD2C9E5F10302F61DE_1552894281461.jpg?output-format=webp",
      isImage: true,
    },
    {
      src: "https://image3.jdomni.in/banner/18032019/74/F1/CD/A71C7DE27A6543F92F31AC96AE_1552894214165.jpg?output-format=webp",
      isImage: true,
    },
    {
      src: "https://image2.jdomni.in/banner/18032019/7C/E7/AD/5D11E345321635EC00B2CBE455_1552894259762.jpg?output-format=webp",
      isImage: true,
    },
  ];

  return (
    <Container version="v2" className="bg-white">
      <div className="py-50 sm-py-20">
        <div className="w-50 sm-w-full">
          <h6 className="head-text text-dark font-600">
            Quality Prints Start Here.
          </h6>
          <p className="text-gray para-text font-400 mt-10">
            Bring your documents and photos to life. Vibrant colors, deep
            blacks, and flawless print clarity.
          </p>
        </div>
        <div className="flex sm-block gap-12 py-20">
          <div className="w-70 sm-w-full">
            <div className="w-full grid-cols-2 md-grid-cols-2 sm-grid-cols-1">
              {galleryImages
                .slice(3, 7)
                .map((item, index) =>
                  item.isImage ? (
                    <img
                      key={index}
                      src={item.src}
                      alt={`gallery-${index + 1}`}
                      className="w-full h-300 object-cover flex"
                    />
                  ) : null
                )}
            </div>
          </div>
          <div className="w-30 sm-w-full">
            {galleryImages
              .slice(7, 8)
              .map((item, index) =>
                item.isImage ? (
                  <img
                    key={index}
                    src={item.src}
                    alt={`gallery-${index + 1}`}
                    className="w-full h-600 object-cover flex"
                  />
                ) : null
              )}
          </div>
        </div>
        {/* <div className="w-full grid-cols-3 gap-12">
          {galleryImages
            .slice(0, 3)
            .map((item, index) =>
              item.isImage ? (
                <img
                  key={index}
                  src={item.src}
                  alt={`gallery-${index + 1}`}
                  className="w-full h-250 object-cover flex"
                />
              ) : null
            )}
        </div> */}
      </div>
    </Container>
  );
};

export default Section5;
