
export const addItemInCart = (cartItems, cartItemToAdd) => {
    const existCartItem = cartItems.find(                       //find return first element of array which passes condition.
        (cartItem) => cartItem.id === cartItemToAdd.id);


    if (existCartItem) {
        return cartItems.map((cartItem) => cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem);
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );
    if (existCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }
    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ?
        { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem);
};