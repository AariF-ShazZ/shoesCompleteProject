import * as types from "./actionTypes"
import axios from "axios"
export const addToCartRequest = () => {
    return {
        type:types.ADD_TO_CART_REQUEST
    }
}
export const addToCartSuccess = (payload) => {
    return {
        type:types.ADD_TO_CART_SUCCESS,
        payload
    }
}
export const addToCartError = () => {
    return {
        type:types.ADD_TO_CART_ERROR
    }
}

export const addToCart = (payload) => (dispatch) => {
    console.log("cart payload",payload);
      dispatch(addToCartRequest());
     return axios.post(
        'https://shoesbackend.onrender.com/cart/create',
        payload,
        {
          headers: {
            Authorization: `${localStorage.getItem('token')}`,
          },
        }
      ).then((res) => {
        console.log('add to cart', res.data.data);
        dispatch(addToCartSuccess());
      }).catch ((error) => {
        console.error('Error adding to cart:', error);
        dispatch(addToCartError());
      }) 
  };


export const getCartProductsRequest = () => {
    return {
        type:types.GET_CART_PRODUCTS_REQUEST
    }
}
export const getCartProductsSuccess = (payload) => {
    return {
        type:types.GET_CART_PRODUCTS_SUCCESS,
        payload
    }
}
export const getCartProductsError = () => {
    return {
        type:types.GET_CART_PRODUCTS_ERROR
    }
}

export const getCartProducts = () => (dispatch) => {

    dispatch(getCartProductsRequest())
    return axios.get(`https://shoesbackend.onrender.com/cart/read`, {
        headers: {
        'Authorization': `${localStorage.getItem("token")}`, 
      }})
    .then((res) =>{
        dispatch(getCartProductsSuccess(res.data.data))
    } ).catch((err) => dispatch(getCartProductsError()))
}



export const delteteCartProductRequest = () => {
    return {
        type:types.GET_CART_PRODUCTS_REQUEST
    }
}
export const delteteCartProductSuccess = (payload) => {
    return {
        type:types.GET_CART_PRODUCTS_SUCCESS,
        payload
    }
}
export const delteteCartProductError = () => {
    return {
        type:types.GET_CART_PRODUCTS_ERROR
    }
}

export const deleteCartProduct = (id) => (dispatch) => {
console.log("deleted",id);
    dispatch(getCartProductsRequest())
    return axios.delete(`https://shoesbackend.onrender.com/cart/delete/${id}`, {
        headers: {
        'Authorization': `${localStorage.getItem("token")}`, 
      }})
    .then((res) =>{
        console.log("delete cart products",res);
        dispatch(getCartProductsSuccess(res.data.data))
    } ).catch((err) => dispatch(getCartProductsError()))
}


export const increaseCartQuantityRequest = () => {
    return {
        type:types.INCREASE_CART_QUANTITY_REQUEST
    }
}
export const increaseCartQuantitySuccess = (payload) => {
    return {
        type:types.INCREASE_CART_QUANTITY_SUCCESS,
        payload
    }
}
export const increaseCartQuantityError = () => {
    return {
        type:types.INCREASE_CART_QUANTITY_ERROR
    }
}

export const increaseCartQuantity = (payload) => (dispatch) => {

    dispatch(increaseCartQuantityRequest())
    return axios.post(`https://shoesbackend.onrender.com/cart/increaseQty/`, payload,{
        headers: {
        'Authorization': `${localStorage.getItem("token")}`, 
      }})
    .then((res) =>{
        dispatch(increaseCartQuantitySuccess(res.data.data))
    } ).catch((err) => dispatch(increaseCartQuantityError()))
}

export const decreaseCartQuantityRequest = () => {
    return {
        type:types.INCREASE_CART_QUANTITY_REQUEST
    }
}
export const decreaseCartQuantitySuccess = (payload) => {
    return {
        type:types.INCREASE_CART_QUANTITY_SUCCESS,
        payload
    }
}
export const decreaseCartQuantityError = () => {
    return {
        type:types.INCREASE_CART_QUANTITY_ERROR
    }
}

export const decreaseCartQuantity = (payload) => (dispatch) => {

    dispatch(decreaseCartQuantityRequest())
    return axios.post(`https://shoesbackend.onrender.com/cart/decreaseQty/`, payload,{
        headers: {
        'Authorization': `${localStorage.getItem("token")}`, 
      }})
    .then((res) =>{
        dispatch(decreaseCartQuantitySuccess(res.data.data))
    } ).catch((err) => dispatch(decreaseCartQuantityError()))
}


const orderPostRequest = () => {
    return{
        type:types.ORDER_POST_REQUEST
    }
}


const orderPostSuccess = (payload) => {
    return {
        type:types.ORDER_POST_SUCCESS,
        payload
    }
}

const orderPostError = () => {
    return{
        type:types.ORDER_POST_ERROR
    }
}
export const orderPost = (payload) => (dispatch) => {
    dispatch(orderPostRequest())
    return axios.post(`https://shoesbackend.onrender.com/order/create`,payload)
    .then((res) =>{  
        dispatch(orderPostSuccess())
    })
    .catch((err) =>  dispatch(orderPostError()))
}


const ordersGetRequest = () => {
    return{
        type:types.ORDERS_GET_REQUEST
    }
}


const ordersGetSuccess = (payload) => {
    return {
        type:types.ORDERS_GET_SUCCESS,
        payload
    }
}

const ordersGetError = () => {
    return{
        type:types.ORDERS_GET_ERROR
    }
}


export const ordersGet = () => (dispatch) => {
    dispatch(ordersGetRequest())
    return axios.get(`https://shoesbackend.onrender.com/order/read`)
    .then((res) =>{  
        dispatch(ordersGetSuccess(res.data.data))
    })
    .catch((err) =>  dispatch(ordersGetError()))
}
