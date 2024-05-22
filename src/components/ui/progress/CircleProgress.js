import { Progress } from "antd";
import React, { useEffect, useState } from "react";

export default function CircleProgress({ percent, text }) {
  const [color, setColor] = useState("gray");

  useEffect(() => {
    if (percent === 0) {
      setColor("gray");
    } else if (percent < 30) {
      setColor("red");
    } else if (percent < 70) {
      setColor("orange");
    } else {
      setColor("green");
    }
  }, [percent]);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Progress
        percent={percent}
        type="circle"
        strokeColor={color}
        size={50}
        style={{
          marginRight: "10px",
          marginBottom: 0,
          alignSelf: "center",
          width: "70%",
        }}
        strokeWidth={10}
      />
      <span style={{ flexShrink: 1 }}>{text}</span>
    </div>
  );
}
