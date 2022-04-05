import React from 'react'
import { INCREASE,DECREASE,REMOVE_ITEM} from '../../Redux/carts/cartAction'
import styles from '../../assets/styles/cart.module.css'
import {shorter} from '../../Functions/functions'
import trash from "../../assets/icons/trash.svg"
import { useDispatch } from 'react-redux'

function Cart(props) {

    const dispatch = useDispatch()
    const {image, title, price,quantity} =props.data

    return (
        <div className={styles.main}>
            <img src={image} alt='img' className={styles.image}/>
            <div>
                <h3>{shorter(title)}</h3>
                <p>{price} $ </p>
            </div>
            <div>
                <span className={styles.num}>{quantity}</span>
            </div>
            <div>
                {
                    quantity > 1 ?
                    <button onClick={() => dispatch(DECREASE(props.data)) }className={styles.icon} >-</button>:
                    <button onClick={() => dispatch(REMOVE_ITEM(props.data))} > <img src={trash} alt='trash' style={{width:"14px"}}/></button>
                    
                }
                 <button onClick={() => dispatch(INCREASE(props.data))}className={styles.icon} >+</button>
            </div>
        </div>
    )
}

export default Cart
