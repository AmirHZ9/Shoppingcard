import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import styles from "../assets/styles/details.module.css";
import Comment from "./Comment";
const ProductDetails = () => {
  const [data, setData] = useState([]);
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setData(res.data));
  });
  const { image, title, description, price, category } = data;
  return (
    <div>
      <div>
        <div className={styles.main}>
          <img src={image} alt="product" />
          <div className={styles.details}>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>
              <span>Category's:</span> {category}
            </p>
            <h3>{price} $</h3>
            <Link to="/product" className={styles.link}>
              Back to start{" "}
            </Link>
          </div>
        </div>
        <Comment />
      </div>
    </div>
  );
};

export default ProductDetails;
