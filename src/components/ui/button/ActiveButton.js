import { Button } from "antd";
import React from "react";

export default function BrannActiveButton({ label, size = "large", ...rest }) {
  return (
    <Button
      className="brann-active-button"
      size={size}
      type="primary"
      {...rest}
    >
      {label}
    </Button>
  );
}
