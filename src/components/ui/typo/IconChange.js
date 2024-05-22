import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function BrannIconChange({ icon, onClick, size = 20, color='gray', ...rest }) {
  return <FontAwesomeIcon icon={icon} onClick={onClick} style={{ fontSize: size, color:color}} {...rest}/>;
}
