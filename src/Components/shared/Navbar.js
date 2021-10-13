import React , {useContext}from 'react'

import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContextProvider'
import shopicon from '../../assets/icons/shop.svg'
function Navbar() {

    const {state} = useContext(CartContext)
    return (
        <div>
            <div>
                <Link to='/product'>Products</Link>
            </div>
            <div>
                <span>
                    <Link to='/cart'>  <img src={shopicon} /> </Link> 
                    <span>{state.itemsCounter} </span>

                </span>
            </div>
             
        </div>
    )
}

export default Navbar
