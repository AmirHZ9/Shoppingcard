import React, { useContext } from "react";
//component
import Product from "../Components/shared/Product";

//style
import styles from '../assets/styles/store.module.css'
//contex
import { ProductContext } from "../context/ProductContextProvider";


function Store() {
  const products = useContext(ProductContext);
  return (
    <div className={styles.main}>
      {products.map((item) => (
        <Product key={item.id} productsData={item} />
      ))}
    </div>
  );
}

export default Store;
