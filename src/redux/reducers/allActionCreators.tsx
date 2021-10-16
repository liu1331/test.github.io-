import { BasketActionCreators } from "./BasketReducer/BasketReducer";
import { ProductActionCreactors } from "./ProductContentReducer/ProductContentReducer";


export const allActionCreators = {
    ...ProductActionCreactors,
    ...BasketActionCreators
}