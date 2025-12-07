import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/home/Home"));
const Products = lazy(() => import("./pages/products/Products"));
const Overview = lazy(() => import("./pages/overview/Overview"));
const Connect = lazy(() => import("./pages/connect/Connect"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-100">
          <p className="text-center para-text text-gray">Loading…</p>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="product" element={<Products />} />
          <Route path="product-detail" element={<Overview />} />
          <Route path="connect" element={<Connect />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;