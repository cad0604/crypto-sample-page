import { Button } from "antd";
import React from "react";

export default function BrannDangerButton({ label, onClick, size = "large", ...rest }) {
  return (
    <Button
      className="brann-danger-button"
      size={size}
      onClick={onClick}
      type="primary"
      {...rest}
    >
      {label}
    </Button>
  );
}
