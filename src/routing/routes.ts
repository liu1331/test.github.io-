import React, { lazy,Suspense,ReactFragment,LazyExoticComponent } from "react";
import { RouteProps } from "react-router-dom";
// import Basket from "../pages/Basket";
// import ProductContent from "../pages/ProductContent";
const ProductContent = lazy(()=> import("../pages/ProductContent"))
const Basket = lazy(()=> import("../pages/Basket"))



export interface RouteType {
    path?: string | string[];
    exact?: boolean;
    component?:any;
    themePath?: string;
  }

export enum RoutePath{
    BASKET= '/basket',
    PRODUCT_CONTENT='/productContent'

}

export const routes:RouteType[] = [
  {
    path: "/",
    exact: true,
    component: ProductContent,
  },
    {path: RoutePath.BASKET, component: Basket, exact: true},
    {path: RoutePath.PRODUCT_CONTENT, component: ProductContent, exact: true},
]