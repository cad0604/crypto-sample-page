import { Dropdown } from "antd";
import React from "react";
import BrannIcon from "../typo/Icon";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function BrannPrimaryDropDown({ label, items, onClick }) {
  return (
    <Dropdown.Button
      icon={<BrannIcon icon={faChevronDown} />}
      size="large"
      type="primary"
      menu={{
        items,
        onClick: items.onClick
      }}
      
      onClick={onClick}
      trigger={["click"]}
    >
      {label}
    </Dropdown.Button>
  );
}
