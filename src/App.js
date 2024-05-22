import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "components/ui/loader/Loader";

const CustomerRoutes = lazy(() => import("routes/Customer"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<CustomerRoutes />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
