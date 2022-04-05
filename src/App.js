import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Store from "./Components/store";
import ProductDetails from "./Components/productDetails";
import Navbar from "./Components/shared/Navbar";
import Shopcart from "./Components/ShopCart";
//Redux
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Shopcart />} />
        <Route path="/product" element={<Store />} />
        <Route path="/*" element={<Navigate to="/product" />} />
      </Routes>
    </Provider>
  );
}

export default App;
