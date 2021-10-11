import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Store from "./Components/store";
import ProductDetails from "./Components/productDetails";

//context


import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider ,{CartContext}from "./context/CartContextProvider";



function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Switch>
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/product" component={Store} />
          <Redirect to="/product" />
        </Switch>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
