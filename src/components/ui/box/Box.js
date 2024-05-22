import React from "react";

const Box = ({
  children,
  width = 350,
  marginTop = 16,
  marginBottom = 10,
  textAlign = "center",
}) => {
  return (
    <div style={{ width, marginTop, textAlign, marginBottom }}>{children}</div>
  );
};

export default Box;
