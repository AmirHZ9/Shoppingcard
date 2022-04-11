import React from "react";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { useParams } from "react-router";
import trash from "../../assets/icons/trash.svg"
import { isInCart,quantityCount,shorter } from "../../Functions/functions";
import styles from '../../assets/styles/category.module.css'
import { INCREASE,DECREASE,REMOVE_ITEM,ADD_ITEM } from "../../Redux/carts/cartAction";
export default function Category() {
  const products = useSelector((state) => state.productState.products);
  const params = useParams();
  const category = params.category;
  const uniqeProduct = products.filter((item) => item.category === category);
  const dispatch = useDispatch()
  const state =useSelector(state=> state.cartState)
console.log(uniqeProduct)
  return (
    <div className={styles.container}>
      {uniqeProduct.map((item) => (
          <div>

         
        <div className={styles.main}>
          <img src={item.image} alt="product" className={styles.item} />
          <h1>{shorter(item.title)}</h1>
            <h3>{item.price} $</h3>
        <div className={styles.linkbutton}>
            <Link className={styles.link} to={`/product/${item.id}`}>Details</Link>
            <div>
            {quantityCount(state, item.id ) > 1 && <button onClick={() => dispatch(DECREASE(item))} className={styles.icon}>-</button>}
            {quantityCount(state, item.id ) === 1 && <button onClick={() => dispatch(REMOVE_ITEM(item) ) } className={styles.icon}><img src={trash} alt="trash" className={styles.trashicon}/> </button>}
            {quantityCount(state, item.id ) > 0 &&  <span className={styles.num}>{quantityCount(state,item.id)}</span>}
                {
                    isInCart(state , item.id) ?
                    <button onClick={() => dispatch(INCREASE(item))} className={styles.icon}>+</button>:
                    <button onClick={() => dispatch(ADD_ITEM(item))}>Add to Cart</button>

                }

 </div>
            </div>
        </div>
         </div>
      ))}
    </div>
  );
}
