import Basket from "../pages/Basket";
import ProductContent from "../pages/ProductContent";



export interface IRoute{
    path: string;
    component: React.ComponentType;
    exact: boolean;
}

export enum RoutePath{
    BASKET= '/testReact/basket',
    PRODUCT_CONTENT='/testReact/productContent',

}

export const Routes:IRoute[] = [

    {path: RoutePath.BASKET, component: Basket, exact: true},
    {path: RoutePath.PRODUCT_CONTENT, component: ProductContent, exact: true}
]