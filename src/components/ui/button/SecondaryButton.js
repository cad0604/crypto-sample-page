import { Button } from "antd";
import React from "react";

export default function BrannSecondaryButton({
  label,
  size = "large",
  ...rest
}) {
  return (
    <Button
      className="brann-secondary-button"
      size={size}
      type="default"
      {...rest}
    >
      {label}
    </Button>
  );
}
