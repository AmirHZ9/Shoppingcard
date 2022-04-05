import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
//component
import Product from "../Components/shared/Product";

//style
import styles from '../assets/styles/store.module.css'

// Redux
import { fetchApi } from "../Redux/Product/productAction";

import spinner from "../assets/Loading/spinner.gif"

function Store() {
  const dispatch = useDispatch()
  const products = useSelector(state => state.productState);
  useEffect(() => {
    dispatch(fetchApi())
  },[])
  return (
    <div className={styles.main}>

      {
        products.loading ?
        <img src={spinner} alt="spinner"  />:
      
      products.products.map((item) => (
        <Product key={item.id} productsData={item} />
      ))}
    </div>
  );
}

export default Store;
