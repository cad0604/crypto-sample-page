import React from "react";

const View = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export default View;
