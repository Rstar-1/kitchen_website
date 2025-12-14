import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import ScrollToTop from "./utility/ScrollToTop";
import Scrolls from "./utility/Scrolls";

const Home = lazy(() => import("./pages/home/Home"));
const About = lazy(() => import("./pages/about/About"));
const Products = lazy(() => import("./pages/products/Products"));
const Overview = lazy(() => import("./pages/overview/Overview"));
const Category = lazy(() => import("./pages/category/Category"));
const Connect = lazy(() => import("./pages/connect/Connect"));

function App() {
  const [enableScroll, setEnableScroll] = React.useState(
    window.innerWidth > 912
  );

  React.useEffect(() => {
    const resize = () => setEnableScroll(window.innerWidth > 912);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-100">
          <p className="text-center para-text text-gray">Loading…</p>
        </div>
      }
    >
      {enableScroll && <Scrolls />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="product" element={<Products />} />
          <Route path="product-detail" element={<Overview />} />
          <Route path="category" element={<Category />} />
          <Route path="connect" element={<Connect />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
