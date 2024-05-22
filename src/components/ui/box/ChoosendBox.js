import React from "react";

const ChoosenBox = ({
  children,
  marginTop = 16,
  marginBottom = 0,
  marginRight = 1,
  marginLeft = 1,
  textAlign = "center",
  choosen
}) => {
  return (
    <>
      {choosen &&
        <div style={{ marginTop, textAlign, marginBottom,marginRight, marginLeft, backgroundColor:'#ff8d00', height:'2rem', paddingTop:'0.4rem' }}>{children}</div>
      }
      {
        !choosen &&
        <div style={{ marginTop, textAlign, marginBottom ,marginRight, marginLeft, height:'2rem'}}></div>
      }
    </>
  );
};

export default ChoosenBox;
