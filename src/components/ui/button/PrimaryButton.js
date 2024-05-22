import { Button } from "antd";
import React from "react";

export default function BrannPrimaryButton({ label, size = "large", ...rest }) {
  return (
    <Button
      className="brann-primary-button"
      size={size}
      type="primary"
      {...rest}
    >
      {label}
    </Button>
  );
}
