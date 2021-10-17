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
        // axios.get<IProduct[]>().then((response)=>{
        //    dispatch(ProductActionCreactors.setProducts(response.data))
        // });
        const response = [
            {productName:"Банан",
                img:"https://ambassador-city-jomtien.ru/uploads/posts/2014-06/1402862895_banana2.jpg",
                price:10, inBasket:false},
            {productName:"Яблоко",
                img:"https://img3.zakaz.ua/upload.version_1.0.4f1f0c8dc6cf9362a789bf80d070ccf6.1350x1350.jpeg",
                price:8, inBasket:false},
            {productName:"Папайя",
                img:"https://img3.zakaz.ua/src.1607469352.ad72436478c_2020-12-09_Aliona/src.1607469352.SNCPSG10.obj.0.1.jpg.oe.jpg.pf.jpg.1350nowm.jpg.1350x.jpg",
                price:10, inBasket:false}
        ];
        dispatch(ProductActionCreactors.setProducts(response));

    },
    pushProduct:(product:IProduct):ProductAction=>({type: ProductActionName.PUSH_PRODUCT, product}) //axios
}