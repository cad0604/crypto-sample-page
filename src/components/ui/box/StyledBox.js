import React from "react";

const StyledBox = ({
  children,
  ...rest
}) => {
  return (
    <div {...rest}>{children}</div>
  );
};

export default StyledBox;
