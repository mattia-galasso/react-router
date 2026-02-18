import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index Component={HomePage} />
        <Route path="/products" Component={ProductsPage} />
        <Route path="/about-us" Component={AboutPage} />
      </Routes>
    </BrowserRouter>
  );
}
