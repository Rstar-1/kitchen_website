import React from "react";

const Navbar = () => {
  const NavData = [
    {
      name: "Home",
      route: "/home",
    },
    {
      name: "About Us",
      route: "/home",
    },
    {
      name: "Blogs",
      route: "/home",
    },
    {
      name: "Gallery",
      route: "/home",
    },
    {
      name: "Connect",
      route: "/home",
    },
  ];
  return (
    <div className="bg-white py-16 w-full">
      <div className="container2">
        <div className="flex items-center w-full justify-between">
          <div className="w-20">
            <h1 className="my-1 mid-text text-forth font-500">Kitchen</h1>
          </div>
          <div className="flex items-center justify-center w-60">
            {NavData?.map((nav, i) => {
              return (
                <div key={i}>
                  <p className="fsize14 text-gray mx-18 cursor-pointer">
                    {nav?.name}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-end w-20">
            <div className="center-div border-0 rounded-full bg-secondary mx-14"></div>
            <div className="center-div border-0 rounded-full bg-secondary"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
