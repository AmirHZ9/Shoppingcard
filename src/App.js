import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Store from "./Components/store";
import ProductDetails from "./Components/productDetails";

//context


import ProductContextProvider from "./context/ProductContextProvider";
import Cartcontextprovider ,{CartContext} from "./context/cartcontextprovider";



function App() {
  return (
    <ProductContextProvider>
      <Cartcontextprovider>
        <Switch>
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/product" component={Store} />
          <Redirect to="/product" />
        </Switch>
      </Cartcontextprovider>
    </ProductContextProvider>
  );
}

export default App;
