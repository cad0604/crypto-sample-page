import { Button } from "antd";
import React from "react";

export default function BrannSubmitButtonWidth({
  label,
  width = null,
  ...rest
}) {
  return (
    <Button
      size="large"
      type="primary"
      htmlType="submit"
      style={width && { width: width, color:'#010101' }}
      {...rest}
    >
      {label}
    </Button>
  );
}
