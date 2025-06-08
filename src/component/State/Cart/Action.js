

import api from '../../config/api';
import { ADD_ITEM_TO_CART_FAILURE, 
    ADD_ITEM_TO_CART_REQUEST, 
    ADD_ITEM_TO_CART_SUCCESS, 
    CLEAR_CART_FAILURE, 
    CLEAR_CART_REQUEST, 
    CLEAR_CART_SUCCESS, 
    FIND_USER_CART_FAILURE, 
    FIND_USER_CART_REQUEST,
    FIND_USER_CART_SUCCESS,
    GET_ALL_CART_ITEM_FAILURE, 
    GET_ALL_CART_ITEM_REQUEST,
    GET_ALL_CART_ITEM_SUCCESS,
    REMOVE_CART_ITEM_FAILURE, 
    REMOVE_CART_ITEM_REQUEST, 
    REMOVE_CART_ITEM_SUCCESS, 
    UPDATE_CART_ITEM_FAILURE,
    UPDATE_CART_ITEM_REQUEST, 
    UPDATE_CART_ITEM_SUCCESS } from './ActionTypes';

export const findUserCart =(token)=>{
    return async(dispatch)=>{
        dispatch({type:FIND_USER_CART_REQUEST});
        try{
        const response = await api.get(`/api/cart`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log("my cart",response.data);
        dispatch({type:FIND_USER_CART_SUCCESS,payload:response.data});
        console.log("find user cart",response.data);
        } catch(error){
            console.log("catch error",error);
            dispatch({type:FIND_USER_CART_FAILURE,payload:error.message});
            console.log("error",error);
        }
    }};
    
    export const getAllCartItem=(token)=>{
        return async(dispatch)=>{
            dispatch({type:GET_ALL_CART_ITEM_REQUEST});
            try{
                const {data} = await api.get(`/cart/items`,{
                    headers:{
                        Authorization:`Bearer ${token}`
            },
        });
        dispatch({type:GET_ALL_CART_ITEM_SUCCESS,payload:data});
        console.log("all cart item",data);
            } catch(error){
                console.log("catch error",error);
                dispatch({type:GET_ALL_CART_ITEM_FAILURE,payload:error.message});
                console.log("error",error);
            }
        }};
        
        export const addItemToCart=({token,itemId,quantity})=>{
            return async(dispatch)=>{
                dispatch({type:ADD_ITEM_TO_CART_REQUEST});
                try{
                    const {data} = await api.post(`/api/cart/add/${itemId}`,{
                        quantity
                    },{
                        headers:{
                            Authorization:`Bearer ${token}`
                },
            });
            dispatch({type:ADD_ITEM_TO_CART_SUCCESS,payload:data});
            console.log("add item to cart",data);
                } catch(error){
                    console.log("catch error",error);
                    dispatch({type:ADD_ITEM_TO_CART_FAILURE,payload:error.message});
                    console.log("error",error);
                }
            }}
            
            export const updateCartItem=({token,itemId,quantity})=>{
                return async(dispatch)=>{
                    dispatch({type:UPDATE_CART_ITEM_REQUEST});
                    try{
                        const {data} = await api.put(`/api/cart/item/update${itemId}`,{
                            quantity
                        },{
                            headers:{
                                Authorization:`Bearer ${token}`
                    },
                });
                dispatch({type:UPDATE_CART_ITEM_SUCCESS,payload:data});
                console.log("update cart item",data);
                    } catch(error){
                        console.log("catch error",error);
                        dispatch({type:UPDATE_CART_ITEM_FAILURE,payload:error.message});
                        console.log("error",error);
                    }
                }}
                
            export const removeCartItem=({jwt,itemId})=>{
                return async(dispatch)=>{
                    dispatch({type:REMOVE_CART_ITEM_REQUEST});
                    try{
                        const {data} = await api.delete(`/api/cart/item/remove/${itemId}`,{
                            headers:{
                                Authorization:`Bearer ${jwt}`
                        },
                    });
                    dispatch({type:REMOVE_CART_ITEM_SUCCESS,payload:data});
                    console.log("remove cart item",data);
                    } catch(error){
                        console.log("catch error",error);
                        dispatch({type:REMOVE_CART_ITEM_FAILURE,payload:error.message});
                        console.log("error",error);
                    }
                }};

                export const clearCartAction=({jwt})=>{
                    return async(dispatch)=>{
                        dispatch({type:CLEAR_CART_REQUEST});
                        try{
                            const {data} = await api.put(`/api/cart/clear`,{
                                headers:{
                                    Authorization:`Bearer ${jwt}`
                            },
                        });
                        dispatch({type:CLEAR_CART_SUCCESS,payload:data});
                        console.log("clear cart",data);
                        } catch(error){
                            console.log("catch error",error);
                            dispatch({type:CLEAR_CART_FAILURE,payload:error.message});
                            console.log("error",error);
                        }
                    }};

                    