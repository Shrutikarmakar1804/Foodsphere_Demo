import * as actionTypes from './ActionTypes';

const initialState = {
    restaurant: [],
    usersRestaurant:null,
    loading: false,
    error: null,
    event: [],
    restaurantEvent: [],
    categories: [],
};

const restaurantreducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_RESTAURANT_REQUEST:
        case actionTypes.GET_ALL_RESTAURANT_REQUEST:
        case actionTypes.DELETE_RESTAURANT_REQUEST:
        case actionTypes.UPDATE_RESTAURANT_REQUEST:
        case actionTypes.GET_RESTAURANT_BY_USER_ID_REQUEST:
        case actionTypes.CREATE_CATEGORY_REQUEST:
        case actionTypes.GET_RESTAURANT_CATEGORY_REQUEST:
            return {
                ...state,
                loading: true,
                error:null,
            };
            case actionTypes.CREATE_RESTAURANT_SUCCESS:
            return {
                ...state,
                loading: false,
                restaurant: action.payload,
            };
            case actionTypes.GET_ALL_RESTAURANT_SUCCESS:
            return {
                ...state,
                loading: false,
                restaurant: action.payload,
            };
            case actionTypes.GET_ALL_EVENT_SUCCESS:
            return {
                ...state,
                loading: false,
                restaurant: action.payload,
            };
            case actionTypes.GET_RESTAURANT_BY_USER_ID_SUCCESS:
                case actionTypes.UPDATE_RESTAURANT_STATUS_SUCCESS:
                    case actionTypes.UPDATE_RESTAURANT_SUCCESS:
                        return {
                            ...state,
                            loading: false,
                            usersRestaurant: action.payload,
                        };
                        case actionTypes.DELETE_RESTAURANT_SUCCESS:
                        return {
                            ...state,
                            error:null,
                            loading: false,
                            restaurant: state.restaurant.filter((item)=>item.id!==action.payload),
                            usersRestaurant: state.usersRestaurant.filter((item)=>item.id!==action.payload),
                        };
                        case actionTypes.CREATE_EVENT_SUCCESS:
                        return {
                            ...state,
                            loading: false,
                            event: [...state.event, action.payload],
                            restaurantEvent: [...state.restaurantEvent, action.payload],
                        };
                        case actionTypes.GET_ALL_EVENT_SUCCESS:
                        return {
                            ...state,
                            loading: false,
                            event: action.payload,
                        };
                        case actionTypes.GET_RESTAURANT_EVENT_SUCCESS:
                        return {
                            ...state,
                            loading: false,
                            restaurantEvent: action.payload,
                        };
                        case actionTypes.DELETE_EVENT_SUCCESS:
                        return {
                            ...state,
                            loading: false,
                            event: state.event.filter((item) => item.id !== action.payload),
                            restaurantEvent: state.restaurantEvent.filter((item) => item.id !== action.payload),
                        };
                        case actionTypes.CREATE_CATEGORY_SUCCESS:
                        return {
                            ...state,
                            loading: false,
                            categories: [...state.categories, action.payload],
                        };
                        case actionTypes.GET_RESTAURANT_CATEGORY_SUCCESS:
                        return {
                            ...state,
                            loading: false,
                            categories: action.payload,
                        };
                        case actionTypes.CREATE_RESTAURANT_FAILURE:
                        case actionTypes.GET_ALL_RESTAURANT_FAILURE:
                        case actionTypes.DELETE_RESTAURANT_FAILURE:
                        case actionTypes.UPDATE_RESTAURANT_FAILURE:
                        case actionTypes.GET_RESTAURANT_BY_USER_ID_FAILURE:
                        case actionTypes.CREATE_CATEGORY_FAILURE:
                        case actionTypes.CREATE_EVENT_FAILURE:
                        case actionTypes.GET_RESTAURANT_CATEGORY_FAILURE:
                            return {
                                ...state,
                                loading: false,
                                error: action.payload,
                            };
                            default:
                                return state;
    }
};
export default restaurantreducer;
