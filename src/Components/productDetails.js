import React, { useContext } from "react";
import {Link} from "react-router-dom"
import { ProductContext } from "../context/ProductContextProvider";
const ProductDetails = (props) => {
    const id = props.match.params.id;
    const data = useContext(ProductContext);
    const product= data[id - 1];
    const {image, title, description, price, category} = product;

  return (
    <div>
     <img src={image} alt="product"/>
     <h1>{title}</h1>
     <p>{description}</p>
     <p>{category}</p>
     <h3>{price} $</h3>
     <Link to="/product">Back to start </Link>
    </div>
  );
};

export default ProductDetails;
