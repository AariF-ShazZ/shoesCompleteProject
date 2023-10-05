import * as types from "./actionTypes"
const initialState = {
    cart:[],
    orders:[],
    isLoadingCart:false,
    isErrorCart:false
}

export const cartReducer = (state=initialState,{type,payload}) =>{
     switch(type){
    case types.ADD_TO_CART_REQUEST:{   
        return {
            ...state,isLoadingCart:true
        }
    }
    case types.ADD_TO_CART_SUCCESS:{   
        return {
            ...state,isLoadingCart:false,isErrorCart:false
        }
    }
    case types.ADD_TO_CART_ERROR:{   
        return {
            ...state,isLoadingCart:false,isErrorCart:true
        }
    }

    case types.GET_CART_PRODUCTS_REQUEST:{   
        return {
            ...state,isLoadingCart:true
        }
    }
    case types.GET_CART_PRODUCTS_SUCCESS:{   
        return {
            ...state,cart:payload,isLoadingCart:false,isErrorCart:false
        }
    }
    case types.GET_CART_PRODUCTS_ERROR:{   
        return {
            ...state,isLoadingCart:false,isErrorCart:true
        }
    }
    case types.DELETE_CART_PRODUCT_REQUEST:{   
        return {
            ...state,isLoadingCart:true
        }
    }
    case types.DELETE_CART_PRODUCT_SUCCESS:{   
        return {
            ...state,cart:payload,isLoadingCart:false,isErrorCart:false
        }
    }
    case types.DELETE_CART_PRODUCT_ERROR:{   
        return {
            ...state,isLoadingCart:false,isErrorCart:true
        }
    }
    case types.INCREASE_CART_QUANTITY_REQUEST:{   
        return {
            ...state,isLoadingCart:true
        }
    }
    case types.INCREASE_CART_QUANTITY_SUCCESS:{   
        return {
            ...state,cart:payload,isLoadingCart:false,isErrorCart:false
        }
    }
    case types.INCREASE_CART_QUANTITY_ERROR:{   
        return {
            ...state,isLoadingCart:false,isErrorCart:true
        }
    }
    case types.DECREASE_CART_QUANTITY_REQUEST:{   
        return {
            ...state,isLoadingCart:true
        }
    }
    case types.DECREASE_CART_QUANTITY_SUCCESS:{   
        return {
            ...state,cart:payload,isLoadingCart:false,isErrorCart:false
        }
    }
    case types.DECREASE_CART_QUANTITY_ERROR:{   
        return {
            ...state,isLoadingCart:false,isErrorCart:true
        }
    }
    case types.ORDERS_GET_REQUEST:{   
        return {
            ...state,isLoadingCart:true
        }
    }
    case types.ORDERS_GET_SUCCESS:{   
        return {
            ...state,orders:payload,isLoadingCart:false,isErrorCart:false
        }
    }
    case types.ORDERS_GET_ERROR:{   
        return {
            ...state,isLoadingCart:false,isErrorCart:true
        }
    }
    default: return state
}
}