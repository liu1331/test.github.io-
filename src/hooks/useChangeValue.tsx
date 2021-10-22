import React, { useEffect, useState } from "react";
import { useActionCreators } from "./useAC";
import { withDiscount } from "./withDiscount";



export interface IOrderIsDiscount {
    countValue?: number,
    totalPrice?: number,
    discount: string | '' | undefined,
    price: number,
    productName: string;
    img?: string;
    inBasket?: boolean
}



export function useChangeValue(order:any) {
    const {price, discount , productName , countValue} = order
    const [countValueInHook, setCountValue] = useState<number>(countValue || 1)
    const [totalPriceInHook, setTotalPrice] = useState<number>(order.totalPrice || order.price)
    const {changeValueOrder} = useActionCreators()

    useEffect(() => {

        changeValueOrder(productName, totalPriceInHook, countValueInHook)



    }, [countValueInHook])

    const upValue = () => {
        setCountValue((Value) => Value + 1)
        const newPrice = withDiscount({ countValueInHook, discount, price })
        console.log('totalPriceInHook '+totalPriceInHook)

        console.log('price '+price)
        console.log('newPrice.priceWithDiscount '+newPrice.priceWithDiscount)


        if (!!discount) {


            if (Number(countValueInHook + 1) % Number(newPrice.valueRule) === 0) {
                setTotalPrice((totalPriceInHook) => totalPriceInHook = Number(totalPriceInHook) + Number(newPrice.priceWithDiscount))

            } else {
                setTotalPrice((totalPriceInHook) => totalPriceInHook = Number(totalPriceInHook) + Number(price))

            }

        } else {
            setTotalPrice((totalPriceInHook) => totalPriceInHook = Number(totalPriceInHook) + Number(price))

        }





    }
    const downValue = () => {
        if (countValueInHook - 1 === 0) {
            return
        }
        if (!!discount) {
            const newPrice = withDiscount({ countValueInHook, discount, price })
            if (Number(countValueInHook) % Number(newPrice.valueRule) === 0) {
                setTotalPrice((totalPriceInHook) => totalPriceInHook = Number(totalPriceInHook) - Number(newPrice.priceWithDiscount))

            } else {
                setTotalPrice((totalPriceInHook) => totalPriceInHook = Number(totalPriceInHook) - Number(price))

            }
        } else {
            setTotalPrice((totalPriceInHook) => totalPriceInHook = Number(totalPriceInHook) - Number(price))
        }

        setCountValue((Value) => Value - 1)


    }

    return {
        countValueInHook, setCountValue, totalPriceInHook, setTotalPrice, upValue, downValue

    }
}
