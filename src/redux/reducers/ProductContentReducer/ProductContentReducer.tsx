import axios from "axios";
import { IProduct } from "../../../types/product";
import { AppDispatch } from "../../store";
import { IProductState, ProductAction, ProductActionName } from "./ProductType";



const InitialState:IProductState = {
    products: [],
    // totalProductsPrice: 0

}

export default function ProductContentReducer(state= InitialState, action:ProductAction ){

    // debugger
    switch (action.type) {
        case ProductActionName.SET_PRODUCTS:
            return {...state, products: [...action.products]}
            break;
        case ProductActionName.PUSH_PRODUCT:



            return {
                ...state,
                products: state.products.map((e) => {
                    if (e.productName === action.product.productName) {
                        return { ...e, inBasket: e.inBasket = action.product.inBasket};
                    };
                    return e;
                }),
                // totalProductsPrice: Number(state.totalProductsPrice) + Number(action.product.totalPrice)
            }
        default:
            return state
            break;
    }
}


export const ProductActionCreactors ={
    setProducts:(products:IProduct[]):ProductAction =>({type:ProductActionName.SET_PRODUCTS, products}),
    getProductsThunk:()=>(dispatch: AppDispatch)=>{
        axios.get<IProduct[]>('products.json').then((response)=>{
           dispatch(ProductActionCreactors.setProducts(response.data))
        });

    },
    pushProduct:(product:IProduct):ProductAction=>({type: ProductActionName.PUSH_PRODUCT, product}) //axios
}