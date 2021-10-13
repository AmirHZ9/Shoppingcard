import React ,{useReducer,createContext} from 'react'
import Product from '../Components/shared/Product'

const initialState = {
    selectedItems : [],
    total : 0,
    itemsCounter : 0,
    checkout : false

}

const sumItems = items => {
    const itemsCounter = items.reduce((total ,product) => total + product.quantity, 0)
    const total = items.reduce((total,product) => total + product.price * product.quantity, 0)
    return{itemsCounter , total}
}
const cartReducer =(state, action) => {
    switch(action.type) {
        case "ADD_ITEM":
            if(!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload, quantity : 1
                })
            }
            return{ ...state,selectedItems:[...state.selectedItems],
            
                    ...sumItems(state.selectedItems)
            }
            case "REMOVE_ITEM":
                const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id)
                return{
                    ...state,selectedItems:[...newSelectedItems],
                    ...sumItems(state.selectedItems)
                }
            case "INCREASE" :
                const IndexI = state.selectedItems.findIndex(item => item.id === action.payload.id)
                state.selectedItems[IndexI].quantity++;
                return{
                    ...state,
                    ...sumItems(state.selectedItems)
                }
            case "DECREASE" :
                const IndexD = state.selectedItems.findIndex(item => item.id === action.payload.id)
                state.selectedItems[IndexD].quantity--;
                return{
                    ...state,
                    ...sumItems(state.selectedItems)
                }       

            case "CHECKOUT":
                return{
                    selectedItems : [],
                    totale : 0,
                    itemsCounter : 0,
                    checkout : true
                }
            case "CLEAR" :
                return{
                    selectedItems : [],
                    totale : 0,
                    itemsCounter : 0,
                    checkout : false
                }
            default:
            return state;
    }
}

export const CartContext = createContext()

const  CartContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, initialState)

    return (
        <CartContext.Provider value={{state,dispatch}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
