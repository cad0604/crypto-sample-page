import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

export default function BrannStrongText({ text, align, color }) {
  return (
    <Title level={4} style={{ marginTop: 0, textAlign: align, color: color }}>
      {text}
    </Title>
  );
}
