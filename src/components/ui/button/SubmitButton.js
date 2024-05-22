import { Button } from "antd";
import React from "react";

export default function BrannSubmitButton({
  label,
  fullWidth = null,
  ...rest
}) {
  return (
    <Button
      size="large"
      type="primary"
      htmlType="submit"
      style={fullWidth && { width: "100%" }}
      {...rest}
    >
      {label}
    </Button>
  );
}
