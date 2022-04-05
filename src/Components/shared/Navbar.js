import React from "react";
import styles from "../../assets/styles/navbar.module.css";
import { Link } from "react-router-dom";
import shopicon from "../../assets/icons/shop.svg";
import { useSelector } from "react-redux";
function Navbar() {
  const state = useSelector((state) => state.cartState);
  return (
    <div className={styles.main}>
      <div>
        <Link to="/product" className={styles.link}>
          Products
        </Link>
      </div>
      <div>
        <span>
          <Link to="/cart">
            <img src={shopicon} alt="shop" className={styles.shopicon} />
          </Link>
          <span className={styles.number}>{state.itemsCounter}</span>
        </span>
      </div>
    </div>
  );
}

export default Navbar;
