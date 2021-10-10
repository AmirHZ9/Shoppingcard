import React from 'react'
import { Link } from 'react-router-dom'
import {shorter } from '../../Functions/functions'
const Product=({productsData}) =>{
    return (
        <div>
            <img src={productsData.image} alt='product' style={{width:"200px"}}/>
            <h1>{shorter(productsData.title)}</h1>
            <h3>{productsData.price} $</h3>
        <div>
            <Link to={`/product/${productsData.id}`}>Details</Link>
            <div>
                <button></button>
            </div>
        </div>
        </div>
    )
}
 
export default Product
 