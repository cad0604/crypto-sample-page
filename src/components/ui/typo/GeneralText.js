import React from "react";
import { Typography } from "antd";

const { Text } = Typography;

export default function BrannGeneralText({ text, align, color, size, marginLeft, vericalAlign, height, lineHeight, display, ...rest }) {
  return (
    <Text
      {...rest}
      style={{ marginTop: 0, textAlign: align, color: color, fontSize:size, marginLeft: marginLeft, verticalAlign:vericalAlign, height:height, lineHeight:lineHeight, display:display }}
    >
      {text}
    </Text>
  );
}
