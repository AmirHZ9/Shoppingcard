import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../assets/styles/product.module.css'
import trash from '../../assets/icons/trash.svg'
import { ADD_ITEM,INCREASE,REMOVE_ITEM,DECREASE } from '../../Redux/carts/cartAction'
import {shorter, isInCart,quantityCount } from '../../Functions/functions'
import { useDispatch, useSelector } from 'react-redux'



const Product=({productsData}) =>{
    const dispatch = useDispatch()
    const state =useSelector(state=> state.cartState)    

    return (
        <div className={styles.main}>
            <img src={productsData.image} alt='product' className={styles.item}/>
            <h1>{shorter(productsData.title)}</h1>
            <h3>{productsData.price} $</h3>
        <div className={styles.linkbutton}>
            <Link className={styles.link} to={`/product/${productsData.id}`}>Details</Link>
            <div>
            {quantityCount(state, productsData.id ) > 1 && <button onClick={() => dispatch(DECREASE(productsData))} className={styles.icon}>-</button>}
            {quantityCount(state, productsData.id ) === 1 && <button onClick={() => dispatch(REMOVE_ITEM(productsData) ) } className={styles.icon}><img src={trash} alt="trash" className={styles.trashicon}/> </button>}
            {quantityCount(state, productsData.id ) > 0 &&  <span className={styles.num}>{quantityCount(state,productsData.id)}</span>}
                {
                    isInCart(state , productsData.id) ?
                    <button onClick={() => dispatch(INCREASE(productsData))} className={styles.icon}>+</button>:
                    <button onClick={() => dispatch(ADD_ITEM(productsData))}>Add to Cart</button>

                }


            </div>
        </div>
        </div>
    )
}
 
export default Product
 