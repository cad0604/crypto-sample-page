import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const routesMap = {
  "/dashboard": lazy(() => import("pages/overview/Index")),
};

export default function CustomerRoutes() {
  return (
    <Routes>
      <Route index element={<Navigate to="/dashboard" />} />
      {Object.entries(routesMap).map(([path, Component]) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
}
