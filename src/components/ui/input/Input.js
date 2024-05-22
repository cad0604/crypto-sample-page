import { Input } from "antd";
import React from "react";

const BrannInput = React.forwardRef(({ placeholder, onChange, value, disable, style, ...rest }, ref) => {
  return <Input placeholder={placeholder} size="large" onChange={onChange} style={style} value={value} ref={ref} disabled={disable} {...rest} />;
})

export default BrannInput;
