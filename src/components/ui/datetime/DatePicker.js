import { DatePicker } from "antd";
import React from "react";
import BrannIcon from "../typo/Icon";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

export default function BrannDatePicker({ size, onChange, ...rest }) {
  return (
    <DatePicker
      size={size}
      onChange={onChange}
      style={{ width: "100%" }}
      {...rest}
      suffixIcon={<BrannIcon icon={faCalendar} />}
    />
  );
}
