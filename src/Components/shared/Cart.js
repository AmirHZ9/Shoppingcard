import React ,{useContext}from 'react'
import { CartContext } from '../../context/CartContextProvider'
import styles from '../../assets/styles/cart.module.css'
import {shorter} from '../../Functions/functions'


import trash from "../../assets/icons/trash.svg"

function Cart(props) {

    const {dispatch} = useContext(CartContext)
    const {image, title, price,quantity} =props.data

    return (
        <div className={styles.main}>
            <img src={image} alt='img' className={styles.image}/>
            <div>
                <h3>{shorter(title)}</h3>
                <p>{price} $ </p>
            </div>
            <div>
                <span>{quantity}</span>
            </div>
            <div>
                {
                    quantity > 1 ?
                    <button onClick={() => dispatch({type:"DECREASE" , payload:props.data})} >-</button>:
                    <button onClick={() => dispatch({type:"REMOVE_ITEM" , payload:props.data})} > <img src={trash} alt='trash' style={{width:"20px"}}/></button>
                    
                }
                 <button onClick={() => dispatch({type:"INCREASE" , payload:props.data})} >+</button>
            </div>
        </div>
    )
}

export default Cart
