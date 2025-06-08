import { LOGOUT } from "../Authentication/ActionType";
import * as actionTypes from "./ActionTypes";

const initialState = {
  cart: [],
  loading: false,
  error: null,
  cartItem:[]
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FIND_USER_CART_REQUEST:
        case actionTypes.GET_ALL_CART_ITEM_REQUEST:
        case actionTypes.ADD_ITEM_TO_CART_REQUEST:
        case actionTypes.UPDATE_CART_ITEM_REQUEST:
        case actionTypes.REMOVE_CART_ITEM_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case actionTypes.FIND_USER_CART_SUCCESS:
            case actionTypes.CLEAR_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cart: action.payload,
                cartItem:action.payload.cartItems,
            };
            
            case actionTypes.ADD_ITEM_TO_CART_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    cartItem: [...state.cartItem, action.payload],
                };

                case actionTypes.UPDATE_CART_ITEM_SUCCESS:
                    return {
                        ...state,
                        loading: false,
                        cartItem: state.cartItem.map((item) =>
                        item.id === action.payload.id ? action.payload : item
                    ),
                };

                case actionTypes.REMOVE_CART_ITEM_SUCCESS:
                    return {
                        ...state,
                        loading: false,
                        cartItem: state.cartItem.filter((item) => item.id !== action.payload),
                    };
                    
                    case actionTypes.FIND_USER_CART_FAILURE:
                        case actionTypes.GET_ALL_CART_ITEM_FAILURE:
                        case actionTypes.ADD_ITEM_TO_CART_FAILURE:
                        case actionTypes.UPDATE_CART_ITEM_FAILURE:
                        case actionTypes.REMOVE_CART_ITEM_FAILURE:
                            return {
                                ...state,
                                loading: false,
                                error: action.payload,
                            };

                            case LOGOUT:
                                localStorage.removeItem("jwt");
                                return {
                                    ...state,
                                    cart: null,
                                    cartItem:[],
                                    success:"Logout Successfully",
                                };
                            default:
                                return state;
        }
    };
    
    export default cartReducer;