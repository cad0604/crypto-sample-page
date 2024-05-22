import { Input } from "antd";
import React from "react";
const { TextArea } = Input;

export default function BrannTextArea({ placeholder, disable, rows=4, ...rest }) {
  return <TextArea placeholder={placeholder} disabled={disable} rows={rows} size="large" {...rest} />;
}
