import React from "react";

export default function BrannPaper({ children, marginTop = 0 }) {
  return (
    <div style={{ marginTop }} className="brann-paper">
      {children}
    </div>
  );
}
