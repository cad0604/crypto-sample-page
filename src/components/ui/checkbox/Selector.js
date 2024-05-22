import { Checkbox } from "antd";
import React from "react";

export default function BrannCheckbox({ label, checked, onChange }) {
  return (
    <Checkbox checked={checked} onChange={onChange}>
      {label}
    </Checkbox>
  );
}
