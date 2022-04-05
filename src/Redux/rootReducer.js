import { combineReducers } from "redux";
import cartReducer from "./carts/cartReducer";
import productReducer from "./Product/productsReducer";
const rootReducer = combineReducers({
  productState: productReducer,
  cartState:cartReducer
});
export default rootReducer;
