import React from "react";

const WhiteBox = ({
  children,
  width = 460,
  marginTop = 16,
  marginBottom = 10,
  textAlign = "left",
}) => {
  return (
    <div style={{ width, marginTop, textAlign, marginBottom, backgroundColor:'white', padding:'10px 20px' }}>{children}</div>
  );
};

export default WhiteBox;
