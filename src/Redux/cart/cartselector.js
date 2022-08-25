import { createSelector } from "reselect"; //reselect library can access redux store.

const selectCart=(state)=>state.cart; // cart is state in reducer

export const selectCartItems = createSelector(
    [selectCart],
    (cart)=>cart.cartItems
);

export const selectCartItemsCount=createSelector(
    [selectCartItems],
    (cartItems)=>cartItems.reduce(
        (collectedQuantity,cartItem)=>
        collectedQuantity + cartItem.quantity,0
    )
);

export const selectCartTotal=createSelector(
    [selectCartItems],
    (cartItems)=>cartItems.reduce(
        (collectedQuantity,cartItem)=>
        collectedQuantity + cartItem.quantity*cartItem.price,0
    )
);