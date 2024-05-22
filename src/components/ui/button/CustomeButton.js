import { Button } from "antd";
import React from "react";

export default function BrannCustomButton({
  label,
  size = "large",
  onClick,
  className="brann-custom-button",
  ...rest
}) {
  return (
    <Button
      className={className}
      size={size}
      type="default"
      onClick={onClick}
      {...rest}
    >
      {label}
    </Button>
  );
}
