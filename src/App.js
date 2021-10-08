import "./App.css";
import ProductContextProvider from "./context/ProductContextProvider";
import Store from "./Components/store";
function App() {
  return (
    <ProductContextProvider>
      <Store />
    </ProductContextProvider>
  );
}

export default App;
