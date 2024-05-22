import { Select } from "antd";
import React from "react";

export default function BrannMultiSelect({
  defaultValue = [0],
  options,
  onChange,
  ...rest
}) {
  return (
    <Select
      mode="tags"
      size="large"
      defaultValue={defaultValue}
      onChange={onChange}
      options={options}
      {...rest}
    />
  );
}
