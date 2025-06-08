
import api from "../../config/api";
import {
    CREATE_MENU_ITEM_FAILURE,
    CREATE_MENU_ITEM_REQUEST,
    CREATE_MENU_ITEM_SUCCESS,
    DELETE_MENU_ITEM_FAILURE,
    DELETE_MENU_ITEM_REQUEST,
    DELETE_MENU_ITEM_SUCCESS,
    GET_MENU_ITEM_BY_RESTAURANT_ID_FAILURE,
    GET_MENU_ITEM_BY_RESTAURANT_ID_REQUEST,
    GET_MENU_ITEM_BY_RESTAURANT_ID_SUCCESS,
    SEARCH_MENU_ITEM_FAILURE,
    SEARCH_MENU_ITEM_REQUEST,
    SEARCH_MENU_ITEM_SUCCESS,
    UPDATE_MENU_ITEM_AVAILABILITY_FAILURE,
    UPDATE_MENU_ITEM_AVAILABILITY_REQUEST,
    UPDATE_MENU_ITEM_AVAILABILITY_SUCCESS,
} from "./ActionTypes";

export const createMenuItem=({menuData, jwt})=>{
    return async(dispatch)=>{
        dispatch({type:CREATE_MENU_ITEM_REQUEST});
        try{
            const {data}=await api.post(`/api/admin/menu`,menuData,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            console.log("create menu item",data);
            dispatch({type:CREATE_MENU_ITEM_SUCCESS,payload:data});
            console.log("create menu item success",data);
        } catch(error){
            dispatch({type:CREATE_MENU_ITEM_FAILURE,payload:error});
            console.log("error",error);
        };
    };
};

export const getMenuItemsByRestaurantId=(reqData)=>{
    return async(dispatch)=>{
        dispatch({type:GET_MENU_ITEM_BY_RESTAURANT_ID_REQUEST});
        try{
            const {data}=await api.get(`/api/food/restaurants/${reqData.restaurantId}?vegetarian=${reqData.vegetarian}&nonveg=${reqData.nonveg}
                &seasonal=${reqData.Seasonal}&food_category=${reqData.foodCategory}`,{
                headers:{
                    Authorization:`Bearer ${reqData.jwt}`,
                },
            }
         );
         console.log("get menu item by restaurant id",data);
            dispatch({type:GET_MENU_ITEM_BY_RESTAURANT_ID_SUCCESS,payload:data});
            console.log("get menu item by restaurant id",data);
        } catch(error){
            dispatch({type:GET_MENU_ITEM_BY_RESTAURANT_ID_FAILURE,payload:error});
            console.log("error",error);
        };
    };
};

export const searchMenuItem =({keyword, jwt})=>{
    return async(dispatch)=>{
        dispatch({type:SEARCH_MENU_ITEM_REQUEST});
        try{
            const {data}=await api.get(`/api/food/search?name=${keyword}`,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            console.log("data -----------",data);
            dispatch({type:SEARCH_MENU_ITEM_SUCCESS,payload:data});
            console.log("search menu item success",data);
        } catch(error){
            dispatch({type:SEARCH_MENU_ITEM_FAILURE,payload:error});
            console.log("error",error);
        };
    };
};

// export const getAllIngredientsOfMenuItem =(reqData)=>{
//     return async(dispatch)=>{
//         dispatch({type:GET_INGREDIENTS_OF_MENU_ITEM_REQUEST});
//         try{
//             const {data}=await api.get(`/api/food/restaurant/${reqData.restaurantId}`,{
//                 headers:{
//                     Authorization:`Bearer ${reqData.jwt}`,
//                 },
//             });
//             console.log("get ingredients of menu item",data);
//             dispatch({type:GET_INGREDIENTS_OF_MENU_ITEM_SUCCESS,payload:data});
//             console.log("get ingredients of menu item success",data);
//         } catch(error){
//             dispatch({type:GET_INGREDIENTS_OF_MENU_ITEM_FAILURE,payload:error});
//             console.log("error",error);
//         };
//     };
// };

export const updateMenuItemAvailability=({foodID, jwt})=>{
    return async(dispatch)=>{
        dispatch({type:UPDATE_MENU_ITEM_AVAILABILITY_REQUEST});
        try{
            const {data}=await api.put(`/api/admin/food/${foodID}`,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            console.log("update menu item availability",data);
            dispatch({type:UPDATE_MENU_ITEM_AVAILABILITY_SUCCESS,payload:data});
            console.log("update menu item availability success",data);
        } catch(error){
            dispatch({type:UPDATE_MENU_ITEM_AVAILABILITY_FAILURE,payload:error.message});
            console.log("error",error);
        };
    };
};

export const deleteFoodAction=({foodId, jwt})=>{
    return async(dispatch)=>{
        dispatch({type:DELETE_MENU_ITEM_REQUEST});
        try{
            const {data}=await api.delete(`/api/admin/food/${foodId}`,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            console.log("delete food",data);
            dispatch({type:DELETE_MENU_ITEM_SUCCESS,payload:data});
            console.log("delete food success",data);
        } catch(error){
            dispatch({type:DELETE_MENU_ITEM_FAILURE,payload:error.message});
            console.log("error",error);
        };
    };
};



