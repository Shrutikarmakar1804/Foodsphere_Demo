
import api from "../../config/api";
import { CREATE_INGREDIENTS_CATEGORY_SUCCESS, 
    CREATE_INGREDIENTS_SUCCESS, 
    GET_INGREDIENTS, 
    GET_INGREDIENTS_CATEGORY_SUCCESS, 
    UPDATE_STOCK_OF_INGREDIENT_SUCCESS } from "./ActionTypes";


export const getIncrediantsOfRestaurant = (id, jwt) => {
    return async (dispatch) => {
        try {
            const response = await api.get(`/api/admin/restaurants/${id}/ingredients`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            console.log("get all ingredients", response.data);
            dispatch({
                type: GET_INGREDIENTS,
                payload: response.data,
            });
        } catch (error) {
            console.log("error", error);
        }
    };
};

export const createIngredient = ({ data, jwt }) => {
    return async (dispatch) => {
        try {
            const response = await api.post(`/api/admin/ingredients`, data, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            console.log("create ingredient", response.data);
            dispatch({
                type: CREATE_INGREDIENTS_SUCCESS,
                payload: response.data,
            });
        } catch (error) {
            console.log("error", error);
        }
    };
};

export const createIngredientCategory = ({ id, data, jwt }) => {
    return async (dispatch) => {
        try {
            const response = await api.post(`/api/admin/ingredients/restaurants/${id}/category`, data, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            console.log("create ingredient category", response.data);
            dispatch({
                type: CREATE_INGREDIENTS_CATEGORY_SUCCESS,
                payload: response.data,
            });
        } catch (error) {
            console.log("error", error);
        }
    };
};

export const getIngredientCategory = ({ id, jwt }) => {
    return async (dispatch) => {
        try {
            const response = await api.get(`/api/admin/ingredients/restaurants/${id}/category`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            console.log("get ingredient category", response.data);
            dispatch({
                type: GET_INGREDIENTS_CATEGORY_SUCCESS,
                payload: response.data,
            });
        } catch (error) {
            console.log("error", error);
        }
    };
};

export const updateStockOfIngredient = ({ id, jwt }) => {
    return async (dispatch) => {
        try {
            const response = await api.get(`/api/admin/ingredients/${id}/stock`, {}, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            console.log("update stock of ingredient", response.data);
            dispatch({
                type: UPDATE_STOCK_OF_INGREDIENT_SUCCESS,
                payload: response.data,
            });
        } catch (error) {
            console.log("error", error);
        }
    };
};