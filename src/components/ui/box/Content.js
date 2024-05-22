import React from "react";

export default function BrannContent({ children, marginTop = 0 }) {
  return (
    <div style={{ marginTop }} className="brann-content">
      {children}
    </div>
  );
}
