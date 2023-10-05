import * as types from "./actionTypes"
import axios from "axios"

const registerRequest  = () => {
    return {
        type:types.USER_REGISTER_REQUEST,
    }
}
const registerSuccess  = (payload) => {
    return {
        type:types.USER_REGISTER_SUCCESS,
        payload
    }
}
const registerError  = () => {
    return {
        type:types.USER_REGISTER_ERROR,
    }
}

export const registerAction  = (payload) => (dispatch) => {
    dispatch(registerRequest())
    // return axios.post("https://reqres.in/api/login",payload)
    return axios.post("https://shoesbackend.onrender.com/user/register",payload)
    .then((res) => {
        dispatch(registerSuccess())
    })
    .catch((err) => dispatch(registerError()))
}


const loginRequest  = () => {
    return {
        type:types.USER_LOGIN_REQUEST,
    }
}
const loginSuccess  = (payload) => {
    return {
        type:types.USER_LOGIN_SUCCESS,
        payload
    }
}
const loginError  = () => {
    return {
        type:types.USER_LOGIN_ERROR,
    }
}

export const login  = (payload) => (dispatch) => {
    // console.log("login payload",payload);
    dispatch(loginRequest())
  return  axios.post("https://shoesbackend.onrender.com/user/login",payload)
    .then((res) => {
        // console.log("login",res.data.data);
        const userDataString = JSON.stringify(res.data.data);

        localStorage.setItem("userType", userDataString);
        if (res.data.data.usertype !== "admin") {
            localStorage.setItem("token", res.data.token);
            localStorage.removeItem("userType")
        }

        dispatch(loginSuccess())
    })
    .catch((err) => dispatch(loginError()))
}


const getUsersRequest  = () => {
    return {
        type:types.GET_USER_REQUEST,
    }
}
const getUsersSuccess  = (payload) => {
    return {
        type:types.GET_USER_SUCCESS,
        payload
    }
}
const getUsersError  = () => {
    return {
        type:types.GET_USER_ERROR,
    }
}

export const getUsersData  = () => (dispatch) => {
    dispatch(getUsersRequest())
    // return axios.post("https://reqres.in/api/login",payload)
  return  axios.get("https://shoesbackend.onrender.com/user/get")
    .then((res) => {
        // console.log("login",res.data.users);
        dispatch(getUsersSuccess(res.data.users))
    })
    .catch((err) => dispatch(getUsersError()))
}
const deleteUsersRequest  = () => {
    return {
        type:types.DELETE_USER_REQUEST,
    }
}
const deleteUsersSuccess  = (payload) => {
    return {
        type:types.DELETE_USER_SUCCESS,
        payload
    }
}
const deleteUsersError  = () => {
    return {
        type:types.DELETE_USER_SUCCESS,
    }
}

export const deleteUsersData  = (id) => (dispatch) => {
    dispatch(deleteUsersRequest())
  return  axios.delete(`https://shoesbackend.onrender.com/user/delete/${id}`)
    .then((res) => {
        // console.log("login",res.data.users);
        dispatch(deleteUsersSuccess())
    })
    .catch((err) => dispatch(deleteUsersError()))
}


const logoutSuccess = () => {
    return {
        type:types.USER_LOGOUT_SUCCESS
    }
}




export const logout = () => (dispatch) => {
    localStorage.removeItem("token")
    localStorage.setItem("pageValue","user")
    localStorage.removeItem("userType")
    dispatch(logoutSuccess())
}