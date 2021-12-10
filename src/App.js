import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Store from "./Components/store";
import ProductDetails from "./Components/productDetails";
import Navbar from "./Components/shared/Navbar";
import Shopcart from "./Components/ShopCart";
//context


import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";



function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/product/:id" element={<ProductDetails/>} />
          <Route path='/cart' element={<Shopcart/>} />
          <Route path="/product" element={<Store/>} />
          <Route path="/*"  element={<Navigate to="/product"/>}/>
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
