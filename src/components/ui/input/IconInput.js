import { Input } from "antd";
import React from "react";

export default function BrannIconInput({
  icon,
  placeholder,
  height = 'max',
  width = "100%",
  ...rest
}) {
  return (
    <Input
      prefix={icon}
      placeholder={placeholder}
      style={{ width: width, height: height }}
      size="large"
      {...rest}
    />
  );
}
