import * as actionTypes from './ActionTypes';

const initialState = {
    menuItems: [],
    loading: false,
    error: null,
    search: [],
    message: null,
};

    const menuItemReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.CREATE_MENU_ITEM_FAILURE:
            case actionTypes.GET_MENU_ITEM_BY_RESTAURANT_ID_FAILURE:
            case actionTypes.DELETE_MENU_ITEM_FAILURE:
            case actionTypes.SEARCH_MENU_ITEM_FAILURE:
            case actionTypes.UPDATE_MENU_ITEM_AVAILABILITY_FAILURE:
                return {
                    ...state,
                    loading: true,
                    error: null,
                    message: null,
                };

                case actionTypes.CREATE_MENU_ITEM_SUCCESS:
                    return {
                        ...state,
                        loading: false,
                        menuItems: [...state.menuItems, action.payload],
                        message: "Food Created Successfully",
                    };
                    
                 case actionTypes.GET_MENU_ITEM_BY_RESTAURANT_ID_SUCCESS:
                     return {
                        ...state,
                        loading: false,
                         menuItems: action.payload,
                     };

                     case actionTypes.DELETE_MENU_ITEM_SUCCESS:
                        return {
                            ...state,
                            loading: false,
                            menuItems: state.menuItems.filter((item) => item.id !== action.payload),
                        };
                        
                        case actionTypes.UPDATE_MENU_ITEM_AVAILABILITY_SUCCESS:
                            console.log("update menu item",action.payload);
                             return {
                                 ...state,
                                 loading: false,
                              menuItems: state.menuItems.filter(
                                (item) => item.id === action.payload.id ? action.payload : item),
                            };

                            case actionTypes.SEARCH_MENU_ITEM_SUCCESS:
                                return {
                                    ...state,
                                    loading: false,
                                    menuItems: action.payload,
                                };
                                
                               
        default:
            return state;
    }
};

export default menuItemReducer;