import React from "react";

const BlackBox = ({
  children,
  width = 500,
  marginTop = 16,
  marginBottom = 10,
  textAlign = "left",
}) => {
  return (
    <div style={{ width, marginTop, textAlign, marginBottom, backgroundColor:'black', padding:'20px 10px' }}>{children}</div>
  );
};

export default BlackBox;
