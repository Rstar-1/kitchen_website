import React from "react";

const Container = ({ children }) => {
  return (
    <div className="h-page overflow-auto py-10">
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Container;
