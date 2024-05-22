import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

export default function BrannTitle({ text, ...rest }) {
  return (
    <Title level={2} {...rest}>
      {text}
    </Title>
  );
}
