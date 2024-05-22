import { Input } from "antd";
import React from "react";

export default function BrannAddonAfterInput({ placeholder, addon, ...rest }) {
  return (
    <Input
      placeholder={placeholder}
      addonAfter={addon}
      size="large"
      {...rest}
    />
  );
}
