import React from "react";
import { Typography } from "antd";

export default function BrannLink({ href, children, className = "brann-link", onClick, underline = false, target, ...rest }) {
  return (
    <Typography.Link href={href} className={className} underline={underline} onClick={onClick} {...rest} target={target}>
      {children}
    </Typography.Link>
  );
}
