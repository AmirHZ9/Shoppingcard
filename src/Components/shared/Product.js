import React, { useContext } from 'react'
import { Link } from 'react-router-dom'


import {shorter, isInCart,quantityCount } from '../../Functions/functions'

 //context
import { CartContext } from '../../context/CartContextProvider'


const Product=({productsData}) =>{

    const {state, dispatch} = useContext(CartContext);

    return (
        <div>
            <img src={productsData.image} alt='product' style={{width:"200px"}}/>
            <h1>{shorter(productsData.title)}</h1>
            <h3>{productsData.price} $</h3>
        <div>
            <Link to={`/product/${productsData.id}`}>Details</Link>
            <div>
            {quantityCount(state, productsData.id ) > 1 && <button onClick={() => dispatch({type:"DECREASE", payload:productsData})}>-</button>}
            {quantityCount(state, productsData.id ) === 1 && <button onClick={() => dispatch({type:"REMOVE_ITEM", payload:productsData})}>remove</button>}
            {quantityCount(state, productsData.id ) > 0 &&  <span>{quantityCount(state,productsData.id)}</span>}
                {
                    isInCart(state , productsData.id) ?
                    <button onClick={() => dispatch({type: "INCREASE", payload: productsData})}>+</button>:
                    <button onClick={() => dispatch({type: "ADD_ITEM", payload: productsData})}>Add to Cart</button>

                }


            </div>
        </div>
        </div>
    )
}
 
export default Product
 