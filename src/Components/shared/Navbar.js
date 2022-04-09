import React from "react";
import styles from "../../assets/styles/navbar.module.css";
import { Link } from "react-router-dom";
import shopicon from "../../assets/icons/shop.svg";
import { useSelector } from "react-redux";
function Navbar() {
  const state = useSelector((state) => state.cartState);
  const products = useSelector(state => state.productState.products)
  // console.log(categories)
  const category =   products.map(item => item.category)
  const uinqueCategory = [...new Set(category)]
 
  
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
      <div className={styles.hamburgerMenu}>
        <span>menu</span>
        <ul>
          {/* <li><Link to="/Men's cloth">Men's cloth</Link></li>
          <li><Link to="/women's cloth">women's cloth</Link></li>
          <li><Link to="/jewelery">jewelery</Link></li>
          <li><Link to="/electronics">electronics</Link></li> */}
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
