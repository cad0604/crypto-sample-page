import React from "react";
import { Typography } from "antd";

export default function BrannLink({ href, children, className = "brann-link", onClick, underline = false, ...rest }) {
  return (
    <Typography.Link href={href} className={className} underline={underline} onClick={onClick} {...rest} target="_blank">
      {children}
    </Typography.Link>
  );
}
