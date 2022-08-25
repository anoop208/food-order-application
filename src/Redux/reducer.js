import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cart/cartreducer";

const persistConfig={
    key:'foodorderapp',
    storage,
    whitelist:['cart'], // (state)it defines those reducers which we want to use localstorage ,so we use cart reducer.
};

const reducer = combineReducers({
    cart:cartReducer                                            //cart is pass in selector as state
});

export default persistReducer(persistConfig,reducer);