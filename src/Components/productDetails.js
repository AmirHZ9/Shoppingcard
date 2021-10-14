import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "../assets/styles/details.module.css";
import { ProductContext } from "../context/ProductContextProvider";
const ProductDetails = (props) => {
  const id = props.match.params.id;
  const data = useContext(ProductContext);
  const product = data[id - 1];
  const { image, title, description, price, category } = product;

  return (
    <div className={styles.main}>
        <img src={image} alt="product" />
      <div className={styles.details}>
        <h1>{title}</h1>
        <p>{description}</p>
        <p><span>Category's:</span> {category}</p>
        <h3>{price} $</h3>
        <Link to="/product" className={styles.link}>Back to start </Link>
      </div>

      
    </div>
  );
};

export default ProductDetails;
