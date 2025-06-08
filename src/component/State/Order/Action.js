import api from "../../config/api";
import { CREATE_ORDER_FAILURE, 
    CREATE_ORDER_REQUEST, 
    CREATE_ORDER_SUCCESS, 
    GET_USERS_ORDER_FAILURE, 
    GET_USERS_ORDER_REQUEST, 
    GET_USERS_ORDER_SUCCESS,
   
} from "./ActionTypes";

export const createOrder = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_ORDER_REQUEST });
        try {
            const { data } = await api.post("/api/order", reqData, {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`,
                }
            });
            if(data.payment_url){
                window.location.href = data.payment_url;
            }
            dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
            console.log("create order data", data);
        } catch (error) {
            console.log("catch error", error);
            dispatch({ type: CREATE_ORDER_FAILURE, payload: error.message });
            console.log("error", error);
        }
    }
};

export const getUsersOrder = (jwt) => {
    return async (dispatch) => {
        dispatch({ type: GET_USERS_ORDER_REQUEST });
        try {
            const { data } = await api.get(`/api/order/user`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({ type: GET_USERS_ORDER_SUCCESS, payload: data });
            console.log("users order", data);
        } catch (error) {
            console.log("catch error", error);
            dispatch({ type: GET_USERS_ORDER_FAILURE, payload: error.message });
            console.log("error", error);
        }
    }
};

export const cancelOrder = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: GET_USERS_ORDER_REQUEST });
        try {
            const { data } = await api.post(`/api/order/${reqData.orderId}/cancel`, {}, {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`,
                },
            });
            dispatch({ type: GET_USERS_ORDER_SUCCESS, payload: data });
            console.log("users order", data);
        } catch (error) {
            console.log("catch error", error);
            dispatch({ type: GET_USERS_ORDER_FAILURE, payload: error.message });
            console.log("error", error);
        }
    }
}

