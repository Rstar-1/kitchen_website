import React from "react";

const Tabs = ({ tabs = [], children, tabIndex = 3 }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div
        className="bg-white p-6 rounded-5"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${tabIndex}, 1fr)`,
        }}
      >
        {tabs.map((tab, index) => (
          <p
            key={index}
            className={`small-text py-6 text-center rounded-5 cursor-pointer ${
              activeIndex === index
                ? "text-white bg-primary"
                : "text-dark bg-transparent"
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </p>
        ))}
      </div>
      <div>
        {Array.isArray(children) ? children[activeIndex] : children}
      </div>
    </>
  );
};

export default Tabs;
