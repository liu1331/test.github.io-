import { IOrder } from './../../../types/order';
export interface IBasketState{
    orders: IOrder[],
    totalPrice: number
}

export enum BasketActionName{
    SET_ORDER= "SET_ORDER",
    SET_ORDERS= "SET_ORDERS",
    SET_TOTAL_PRICE= "SET_TOTAL_PRICE",
    REMOVE_ORDER= "REMOVE_ORDER",
    CHANGE_ORDER_VALUE_ACTION= "CHANGE_ORDER_VALUE_ACTION",
}

export interface SetOrderAction{
    type: BasketActionName.SET_ORDER
    order: IOrder
}
export interface SetOrdersAction{
    type: BasketActionName.SET_ORDERS
    orders: IOrder[]
}
export interface removeOrder{
    type: BasketActionName.REMOVE_ORDER
    order: IOrder
}
export interface setTotalPrice{
    type: BasketActionName.SET_TOTAL_PRICE

}
export interface changeOrderValueAction{
    type: BasketActionName.CHANGE_ORDER_VALUE_ACTION;
    productName:string;
    countValue: number;
    totalPrice: number

}


export type BasketActions = SetOrderAction | SetOrdersAction | removeOrder | setTotalPrice | changeOrderValueAction