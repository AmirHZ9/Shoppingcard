import React from 'react'
import {shorter } from '../../Functions/functions'
function Product({productsData}) {
    return (
        <div>
            <img src={productsData.image} style={{width:"200px"}}/>
            <h1>{shorter(productsData.title)}</h1>
            <h3>{productsData.price}</h3>
        <div>
            <a>Details</a>
            <div>
                <button></button>
            </div>
        </div>
        </div>
    )
}

export default Product
