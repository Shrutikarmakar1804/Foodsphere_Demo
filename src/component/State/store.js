import { thunk } from "redux-thunk";
import { authReducer } from "./Authentication/Reducer";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import restaurantreducer from "./Restaurant/Reducer";
import menuItemReducer from "./Menu/Reducer";
import cartReducer from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";
import restaurantOrderReducer from "./RestaurantOrder/Reducer";
import { ingredientReducer } from "./Ingredients/Reducer";

const rooteReducer=combineReducers ({
    auth: authReducer,
    restaurant:restaurantreducer,
    menu:menuItemReducer,
    cart:cartReducer,
    order:orderReducer,
    restaurantOrder:restaurantOrderReducer,
    ingredients:ingredientReducer,
});


export const store=legacy_createStore(rooteReducer,applyMiddleware (thunk));
