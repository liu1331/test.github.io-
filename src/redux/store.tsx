import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { BasketReducer } from "./reducers/BasketReducer/BasketReducer";
import ProductContentReducer from "./reducers/ProductContentReducer/ProductContentReducer";

const Reducers = combineReducers({
    ProductContent: ProductContentReducer,
    Basket: BasketReducer
})

const store = createStore(Reducers, applyMiddleware(thunk))


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;