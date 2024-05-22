import { Progress } from "antd";
import React, { useEffect, useState } from "react";

export default function LineProgress({ percent, text }) {
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
        strokeColor={color}
        style={{
          marginRight: "10px",
          marginBottom: 0,
          alignSelf: "center",
          width: "70%",
        }}
        strokeLinecap="square"
        showInfo={false}
      />
      <span
        style={{ color: color, flexShrink: 1 }}
      >{`${percent}% ${text}`}</span>
    </div>
  );
}
