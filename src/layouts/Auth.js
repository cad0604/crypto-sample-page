import React from "react";

export default function AuthLayout({ children }) {
  return (
    <div className="body">
      <div className="container">
        {children}
      </div>
    </div>
  );
}
