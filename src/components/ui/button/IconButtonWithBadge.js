import { Badge, Button } from "antd";
import React from "react";
import BrannIcon from "../typo/Icon";

export default function BrannIconButtonWithBadge({
  icon,
  badgePos = [-3, 20],
  onClick,
  ...rest
}) {
  return (
    <Badge color="#ff8d00" dot={true} offset={badgePos}>
      <Button shape="circle" icon={<BrannIcon icon={icon} size={20} {...rest} onClick={onClick}/>} />
    </Badge>
  );
}
