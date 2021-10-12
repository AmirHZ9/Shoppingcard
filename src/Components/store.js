import React, { useContext } from "react";
//component
import Product from "../Components/shared/Product";

//contex
import { ProductContext } from "../context/ProductContextProvider";


function Store() {
  const products = useContext(ProductContext);
  return (
    <div style={{display:"flex" ,flexWrap:"wrap",justifyContent:"space-between"}}>
      {products.map((item) => (
        <Product key={item.id} productsData={item} />
      ))}
    </div>
  );
}

export default Store;
