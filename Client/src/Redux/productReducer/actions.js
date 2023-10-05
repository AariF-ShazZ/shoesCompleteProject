import * as types from "./actionTypes"
import axios from "axios"

const getProductsRequest = () => {
    return {
        type:types.GET_PRODUCTS_REQUEST
    }
}
const getProductsSuccess = (payload) => {
    return {
        type:types.GET_PRODUCTS_SUCCESS,
        payload
    }
}
const getProductsError = () => {
    return {
        type:types.GET_PRODUCTS_ERROR
    }
}

export const getProducts = (page,params) => (dispatch) => {
    dispatch(getProductsRequest())
    return axios.get(`https://shoesbackend.onrender.com/product/read?page=${page}&limit=10`,params)
    .then((res) =>{  
        dispatch(getProductsSuccess(res.data.data))
    })
    .catch((err) =>  dispatch(getProductsError()))
}

const deleteProductsRequest = () => {
    return {
        type:types.DELETE_PRODUCT_REQUEST
    }
}
const deleteProductsSuccess = (payload) => {
    return {
        type:types.DELETE_PRODUCT_SUCCESS,
        payload
    }
}
const deleteProductsError = () => {
    return {
        type:types.DELETE_PRODUCT_ERROR
    }
}


export const deleteProduct = (id) => (dispatch) => {
    dispatch(deleteProductsRequest())
    return axios.delete(`https://shoesbackend.onrender.com/product/delete/${id}`)
    .then((res) =>{  
        dispatch(deleteProductsSuccess())
    })
    .catch((err) =>  dispatch(deleteProductsError()))
}


const postProductsRequest = () => {
    return {
        type:types.POST_PRODUCT_REQUEST
    }
}
const postProductsSuccess = (payload) => {
    return {
        type:types.POST_PRODUCT_SUCCESS,
        payload
    }
}
const postProductsError = () => {
    return {
        type:types.POST_PRODUCT_ERROR
    }
}


export const postProduct = (payload) => (dispatch) => {
    dispatch(postProductsRequest())
    return axios.post(`https://shoesbackend.onrender.com/product/create`,payload)
    .then((res) =>{  
        dispatch(postProductsSuccess(res.data.data))
    })
    .catch((err) =>  dispatch(postProductsError()))
}

const singleProductRequest = () => {
    return{
        type:types.SINGLE_PRODUCT_REQUEST
    }
}


const singleProductSuccess = (payload) => {
    // console.log("single product",payload);
    return {
        type:types.SINGLE_PRODUCT_SUCCESS,
        payload
    }
}

const singleProductError = () => {
    return{
        type:types.SINGLE_PRODUCT_ERROR
    }
}


export const getSingleProducts = (id) => (dispatch) => {
    dispatch(singleProductRequest())
    return axios.get(`https://shoesbackend.onrender.com/product/read/${id}`)
    .then((res) =>{  
        dispatch(singleProductSuccess(res.data.data))
    })
    .catch((err) =>  dispatch(singleProductError()))
}

const updateProductRequest = () => {
    return{
        type:types.UPDATE_PRODUCT_REQUEST
    }
}


const updateProductSuccess = (payload) => {
    return {
        type:types.UPDATE_PRODUCT_SUCCESS,
        payload
    }
}

const updateProductError = () => {
    return{
        type:types.UPDATE_PRODUCT_ERROR
    }
}


export const updateProducts = (id,payload) => (dispatch) => {
    dispatch(updateProductRequest())
    return axios.patch(`https://shoesbackend.onrender.com/product/update/${id}`,payload)
    .then((res) =>{  
        dispatch(updateProductSuccess())
    })
    .catch((err) =>  dispatch(updateProductError()))
}

const getAllProductsRequest = () => {
    return {
        type:types.GET_ALL_PRODUCTS_REQUEST
    }
}
const getAllProductsSuccess = (payload) => {
    return {
        type:types.GET_ALL_PRODUCTS_SUCCESS,
        payload
    }
}
const getAllProductsError = () => {
    return {
        type:types.GET_ALL_PRODUCTS_ERROR
    }
}

export const getAllProducts = () => (dispatch) => {
    dispatch(getAllProductsRequest())
    return axios.get(`https://shoesbackend.onrender.com/product/all`)
    .then((res) =>{  
        dispatch(getAllProductsSuccess(res.data.productResult))
    })
    .catch((err) =>  dispatch(getAllProductsError()))
}
