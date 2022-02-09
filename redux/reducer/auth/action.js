import qs from 'qs';
import axios from "axios";
import validator from "validator";
import authType from "./type";
import { addNotif } from '../general/action';
import Router from 'next/router';

export const register = (data) => (dispatch) => {
    axios({
        method: 'POST',
        url: `${process.env.NEXT_PUBLIC_API_URL}/v1/auth/register/b2b`,
        data,
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(d => {
        Router.push('/auth/login');
        dispatch(addNotif('berhasil didaftaran', 'success'));
    })
    .catch(e => {
        const message = e.response?.data?.message;
        dispatch(addNotif(typeof(message) === 'string' ? message : message[Object.keys(message)[0]], 'error'))
    })
}

export const loginFunction = (email, password) => (dispatch) => {
    if(!email) return dispatch(addNotif('email tidak boleh kosong', 'error'));
    if(!validator.isEmail(email)) return dispatch(addNotif('email tidak valid', 'error'));
    if(!password) return dispatch(addNotif('password tidak boleh kosong', 'error'));
    loginFetch(email, password)
    .then(d => {
        window.localStorage.setItem('token', d.data?.access_token);
        window.localStorage.setItem('refreshToken', d.data?.refresh_token);
        dispatch(addNotif('berhasil login', 'success'));
        Router.push('/');
    })
    .catch(e => dispatch(addNotif('email atau password salah')));
}

const loginFetch = (username, password) => {
    return axios({
        method: 'post',
        url: `${process.env.NEXT_PUBLIC_API_URL}/v1/auth/login/b2b`, 
        data: qs.stringify({
            client_id: "MDB2BCID",
            client_secret: "MDB2BCS",
            username, 
            password,
            grant_type: 'password'
        }),
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    })
}


export const checkLogged = (logged) => (dispatch) => {
    if(!logged && !!window.localStorage.getItem('token')){
        console.log(window.localStorage.getItem('token'))
        getProfile(dispatch);
    }
}

export const setProfile = () => (dispatch) => getProfile(dispatch);

const getProfile = (dispatch) => {
    const config = {
        headers: {
            'Authorization': 'Bearer ' + window.localStorage.getItem('token')
        }
    }
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/profile`, config)
    .then(d => {
        dispatch({
            type: authType.SET_LOGGED,
            payload: d.data.data
        });
    })
    .catch(e => {
        window.localStorage.removeItem('token');
        Router.push("/auth/login");
    });
}

export const logout = () => dispatch => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('refreshToken');
    dispatch({
        type: authType.SET_LOGGED,
        payload: ''
    });
    dispatch(addNotif('berhasil logout', 'success'));
}

const forgotPassword = (dispatch) => {
    
}