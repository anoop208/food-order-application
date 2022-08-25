import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
//persist store library used from redux persist to store updates in localstorage.

import reducer from './reducer';

//devtool extension is used to see our application state in the browser.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//middleware(third party extension bw action and reducers) add extra feature in redux like logging,crash reporting.
const store = createStore(reducer, composeEnhancers(applyMiddleware()));

const persistor = persistStore(store);

export { store, persistor };