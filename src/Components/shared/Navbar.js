import React from "react";
import { Link } from "react-router-dom";
import styles from "../../assets/styles/navbar.module.css";
import shopicon from "../../assets/icons/shop.svg";

import { useSelector } from "react-redux";
function Navbar() {
  const state = useSelector((state) => state.cartState);
  const products = useSelector(state => state.productState.products)
  const category =   products.map(item => item.category)
  const uinqueCategory = [...new Set(category)]
 
  
  return (
    <div className={styles.main}>
      <div className={styles.mainAndCartIcon}>

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
      <div className={styles.hamburgerMenu}>
        <span>category</span>
        <ul>
         
          {
            uinqueCategory.map(item => 
              <li ><Link key={item.indexOf()} to={`/product/category/${item}`}>{item}</Link></li>
              )
          }
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
