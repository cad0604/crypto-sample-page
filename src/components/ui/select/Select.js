import { Select } from "antd";
import React from "react";

export default function BrannSelect({
  defaultValue = 0,
  options,
  onChange,
  placeholder,
  ...rest
}) {
  return (
    <Select
      size="large"
      // defaultValue={0}
      onChange={onChange}
      options={options}
      placeholder={placeholder}
      {...rest}
    />
  );
}
