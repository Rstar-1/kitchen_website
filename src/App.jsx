import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";

const Home = lazy(() => import("./pages/home/Home"));
const Products = lazy(() => import("./pages/products/Products"));
const Overview = lazy(() => import("./pages/overview/Overview"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="product" element={<Products />} />
          <Route path="product-detail" element={<Overview />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
