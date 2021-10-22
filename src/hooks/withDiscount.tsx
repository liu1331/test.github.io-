import { DiscountName } from "../types/discounts";



export interface IOrderIsDiscount{
    countValueInHook: number,
    discount: string | '',
    price: number
}



export function withDiscount (order:IOrderIsDiscount){
        switch (order.discount) {
            case DiscountName.ON_3_KG:
                    return {priceWithDiscount: Number(order.price) /2,
                    valueRule: 3}

            default:
               return {priceWithDiscount: Number(order.price),
                valueRule: null}
        }
}