import React from "react";

const Patch = () => {
  const patchData = [
    {
      image: "https://nunforest.com/koad-demo/images/icon1@2x.png",
      title: "Fresh Ingredients",
      description: "Sed egestas, ante vulputa eros pede vitae luctus metus augue.",
    },
    {
      image: "https://nunforest.com/koad-demo/images/icon2@2x.png",
      title: "Best Recipe",
      description: "Sed egestas, ante vulputa eros pede vitae luctus metus augue.",
    },
    {
      image: "https://nunforest.com/koad-demo/images/icon3@2x.png",
      title: "Happy Clients",
      description: "Sed egestas, ante vulputa eros pede vitae luctus metus augue.",
    },
    {
      image: "https://nunforest.com/koad-demo/images/icon4@2x.png",
      title: "Vegan Menu",
      description: "Sed egestas, ante vulputa eros pede vitae luctus metus augue.",
    },
  ];

  return (
    <div className="grid-cols-4 gap-12 w-full">
      {patchData.map((item, index) => (
        <div key={index} className="text-center px-20">
          <img
            src={item?.image}
            alt={item?.title}
            className="patch-img object-contain mx-auto mb-20"
          />
          <h4 className="mid-text text-forth">{item?.title}</h4>
          <p className="small-text text-gray mt-10">{item?.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Patch;
