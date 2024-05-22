import { Button } from "antd";
import React from "react";

export default function BrannSecondaryButtonColor({
  label,
  size = "large",
  color = null,
  ...rest
}) {
  return (
    <Button
      className="brann-secondary-button-color"
      size={size}
      type="default"
      {...rest}
    >
      {label}
    </Button>
  );
}
