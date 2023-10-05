import * as types from "./actionTypes"
const initialState = {
    products:[],
    isLoading:false,
    isError:false,
    singleProduct:{},
    allProducts:0
}

export const productsReducer = (state=initialState,{type,payload}) =>{

    switch(type){
    case types.GET_PRODUCTS_REQUEST:{
        return {
            ...state,isLoading:true
        }
    }
    case types.GET_PRODUCTS_SUCCESS:{
        return {
            ...state,isLoading:false,products:payload
        }
    }
    case types.GET_PRODUCTS_ERROR:{
        return {
            ...state,isLoading:false,isError:true
        }
    }

    case types.SINGLE_PRODUCT_REQUEST:{
        return {
            ...state,isLoading:false
        }
    }
    case types.SINGLE_PRODUCT_SUCCESS:{
        return {
            ...state,
            singleProduct: payload
        }
    }
    case types.SINGLE_PRODUCT_ERROR:{
        return {
            ...state,isLoading:false,isError:true
        }
    }

    case types.GET_ALL_PRODUCTS_REQUEST:{
        return {
            ...state,isLoading:true
        }
    }
    case types.GET_ALL_PRODUCTS_SUCCESS:{
        return {
            ...state,allProducts:payload
        }
    }
    case types.GET_ALL_PRODUCTS_ERROR:{
        return {
            ...state,isError:true
        }
    }

    default: return state
}
}