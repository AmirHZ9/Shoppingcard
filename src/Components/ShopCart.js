import React from "react";
import Cart from "./shared/Cart";
import styles from '../assets/styles/shopcart.module.css'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Shopcart() {
  const state = useSelector(state=> state.cartState)
  const dispatch = useDispatch()
  return (
    <div className={styles.main}>
   
      <div>
        {state.selectedItems.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>
      {state.itemsCounter > 0 && (
        <div className={styles.container}>
          <p className={styles.span}>
            <span >Total items:</span>
            {state.itemsCounter}
          </p>
          <p className={styles.span}>
            <span>Total Payments:</span>
            {state.total} $
          </p>
        
        <div className={styles.button}>
        <button onClick={() => dispatch({ type: "CHECKOUT" })}>checkout</button>
        <button onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
      </div>
      </div>
      )}
      
      {state.checkout && (
        <div className={styles.checkout}>
          <h3>checked Out Successfully</h3>
          <Link className={styles.link} to="/product">back to product</Link>
        </div>
      )}
      {!state.checkout && state.itemsCounter === 0 && (
        <div className={styles.checkout}>
          <h3>want to buy</h3>
          <Link  className={styles.link} to="/product">back to product</Link>
        </div>
      )}
      </div>
   
  );
}

export default Shopcart;
