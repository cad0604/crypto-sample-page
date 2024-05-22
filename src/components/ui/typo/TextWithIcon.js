import React from "react";
import { Typography } from "antd";
import BrannIcon from "./Icon";
import View from "../box/View";

const { Text } = Typography;

export default function BrannTextWithIcon({
  icon,
  text,
  align,
  contentAlign,
  color,
  ...rest
}) {
  return (
    <View className="flex-row" style={{justifyContent: contentAlign}}>
      <BrannIcon icon={icon} />
      <Text
        {...rest}
        style={{
          marginTop: 0,
          textAlign: align,
          color: color,
        }}
      >
        {text}
      </Text>
    </View>
  );
}
