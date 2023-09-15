import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Products from "./Products";
import Cart from "./Cart";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
