import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

export default function BrannSubTitle({ text, align, color, size = 3 }) {
  return (
    <Title
      ellipsis
      level={size}
      style={{ marginTop: 0, textAlign: align, color: color }}
    >
      {text}
    </Title>
  );
}
