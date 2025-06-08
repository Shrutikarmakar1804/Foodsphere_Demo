import { GET_USERS_ORDER_FAILURE, GET_USERS_ORDER_REQUEST, GET_USERS_ORDER_SUCCESS } from "./ActionTypes";

const initialState = {
    orders: [],
    loading: false,
    error: null,
};

 export const orderReducer = (state = initialState, {type,playload}) => {
    switch (type) {
        case  GET_USERS_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case GET_USERS_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: playload,
            };
        case GET_USERS_ORDER_FAILURE:
            return {
                ...state,
                loading: false,
                error: playload,
            };
        default:    
            return state;
        }
    };