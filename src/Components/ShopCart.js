import React, { useContext } from "react";
import Cart from "./shared/Cart";

import { CartContext } from "../context/CartContextProvider";
import { Link } from "react-router-dom";

function Shopcart() {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div>
      <div>
        {state.selectedItems.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>
      {state.itemsCounter > 0 && (
        <div>
          <p>
            <span>Total items:</span>
            {state.itemsCounter}
          </p>
          <p>
            <span>Total Payments:</span>
            {state.total}
          </p>
        
        <div>
        <button onClick={() => dispatch({ type: "CHECKOUT" })}>checkout</button>
        <button onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
      </div>
      </div>
      )}
      
      {state.checkout && (
        <div>
          <h3>checked Out Successfully</h3>
          <Link to="/product">back to product</Link>
        </div>
      )}
      {!state.checkout && state.itemsCounter === 0 && (
        <div>
          <h3>want to buy</h3>
          <Link to="/product">back to product</Link>
        </div>
      )}
    </div>
  );
}

export default Shopcart;
