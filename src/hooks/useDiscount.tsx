import { DiscountName } from "../types/discounts";



export interface IOrderIsDiscount{
    countValue: number,
    discount: string | '',
    price: number
}



export function Discount (order:IOrderIsDiscount){

        switch (order.discount) {
            case DiscountName.ON_3_KG:
                if((order.countValue+1)%3 === 0) {
                    return order.price /2
                }else{
                    return order.price
                }
            default:
               return order.price
        }
}