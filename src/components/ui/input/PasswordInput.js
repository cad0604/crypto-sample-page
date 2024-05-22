import { Input } from "antd";
import React from "react";

export default function BrannPasswordInput({ placeholder, autoComplete, ...rest }) {
  return <Input.Password placeholder={placeholder} autoComplete={autoComplete} size="large" {...rest} />;
}
