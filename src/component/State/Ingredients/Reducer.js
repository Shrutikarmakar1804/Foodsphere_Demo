import { CREATE_INGREDIENTS_CATEGORY_SUCCESS, CREATE_INGREDIENTS_SUCCESS, GET_INGREDIENTS, GET_INGREDIENTS_CATEGORY_SUCCESS,  UPDATE_STOCK_OF_INGREDIENT_SUCCESS } from "./ActionTypes";

const initialState = {
    ingredients: [],
    update:null,
    category:[],
};

export const ingredientReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INGREDIENTS:
            return {
                ...state,
                ingredients: action.payload,
            };
            case GET_INGREDIENTS_CATEGORY_SUCCESS:
                return {
                    ...state,
                    category: action.payload,
                };
                case CREATE_INGREDIENTS_CATEGORY_SUCCESS:
                    return {
                        ...state,
                        category: [...state.category, action.payload],
                    };
                    case CREATE_INGREDIENTS_SUCCESS:
                        return {
                            ...state,
                            ingredients: [...state.ingredients, action.payload],
                        };
                        case UPDATE_STOCK_OF_INGREDIENT_SUCCESS:
                            return {
                                ...state,
                                update: action.payload,
                                ingredients: state.ingredients.map((ingredient) =>
                                ingredient.id === action.payload.id ? action.payload : ingredient
                            ),
                            };
                            default:
                                return state;
    }
};