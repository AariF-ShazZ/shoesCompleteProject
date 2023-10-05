import {legacy_createStore,combineReducers,applyMiddleware,compose} from "redux"
import thunk from "redux-thunk"
import { productsReducer } from "./Redux/productReducer/reducer"
import { cartReducer } from "./Redux/cartReducer/reducer"
import {authReducer}  from "./Redux/authReducer/reducer"
const rootReducer = combineReducers({
    productsReducer,cartReducer,authReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = legacy_createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)))
export {store} 