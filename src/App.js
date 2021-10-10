import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import ProductContextProvider from "./context/ProductContextProvider";
import Store from "./Components/store";
import ProductDetails from "./Components/productDetails";
function App() {
  return (
    <ProductContextProvider>
      <Switch>
        <Route path="/product/:id" component={ProductDetails} />
        <Route path="/product" component={Store} />
        <Redirect to="/product" />
      </Switch>
      
    </ProductContextProvider>
  );
}

export default App;
