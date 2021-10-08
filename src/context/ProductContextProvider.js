import React, { useState, useEffect, createContext } from "react";

import { getproducts } from "../Services/api";

//context 
export const  ProductContext = createContext();

function ProductContextProvider(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchapi = async () => {
      setProducts(await getproducts());
    };
    fetchapi();
  });
  return (
    <div>
      <ProductContext.Provider value={products}>
        {props.children}
      </ProductContext.Provider>
    </div>
  );
}

export default ProductContextProvider;
