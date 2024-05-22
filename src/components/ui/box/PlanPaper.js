import React from "react";

export default function BrannPlanPaper({ children, marginTop = 0 }) {
  return (
    <div style={{ marginTop }} className="brann-plan-paper">
      {children}
    </div>
  );
}
