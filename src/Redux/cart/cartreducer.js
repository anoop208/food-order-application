import { addItemInCart,removeItemFromCart } from "./cartutils";
import { CartActionTypes } from "./cartactiontypes";
const INITIAL_STATE={
    cartItems:[],               //initial state of cartitem
};

const cartReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case CartActionTypes.CART_ADD_ITEM:
            return {
                ...state,
                cartItems:addItemInCart(state.cartItems,action.payload), //called utills function.
            };
        case CartActionTypes.CART_CLEAR_ITEM:
            return{
                ...state,
                cartItems:state.cartItems.filter(                      // filter function runs for each array element and return items(an array) which satisfy condition.
                    (cartItem)=>cartItem.id !== action.payload.id            
                ),
            } ;   
        case CartActionTypes.CART_REMOVE_ITEM:
            return{
                ...state,
                cartItems:removeItemFromCart(state.cartItems,action.payload),

            } ;
            default:
                return state;   
    }

};

export default cartReducer;