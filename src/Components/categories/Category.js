import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

export default function Category() {
  const products = useSelector((state) => state.productState.products);
  const params = useParams();
  const category = params.category;
  const uniqeProduct = products.filter((item) => item.category === category);

  return (
    <div>
      {uniqeProduct.map((item) => (
        <div>
          <img src={item.image} alt="" style={{ width: "200px" }} />
        </div>
      ))}
    </div>
  );
}
