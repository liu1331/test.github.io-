import { IProduct } from '../../../types/product';


export interface IProductState{
    products: IProduct[],
    // totalProductsPrice: number
}

export interface IPushProduct{
    productName: string;
    totalPrice: number;
    inBasket:boolean;

}

export enum ProductActionName{
    SET_PRODUCTS = "SET_PRODUCTS",
    PUSH_PRODUCT = "SET_PRODUCT"
}

export interface SetProducts{
    type: ProductActionName.SET_PRODUCTS;
    products: IProduct[]

}
export interface pushProduct{
    type: ProductActionName.PUSH_PRODUCT;
    product: IProduct

}


export type ProductAction = SetProducts | pushProduct
