import { IOrder} from "../../../types/order"
import { AppDispatch } from "../../store";
import { BasketActionName, BasketActions, IBasketState } from "./BasketOrderType"

const InitalState:IBasketState = {
    orders: [],
    totalPrice: 0
}

export function BasketReducer(state = InitalState, action:BasketActions){
// debugger
    switch (action.type) {

        case BasketActionName.SET_ORDER:
            return {...state, orders: [...state.orders, action.order],totalPrice: Number(state.totalPrice) + Number(action.order.totalPrice) }

            break;
        case BasketActionName.SET_ORDERS:

            return {...state, orders:[...action.orders]}
        case BasketActionName.SET_TOTAL_PRICE:

            return {...state, totalPrice: action.totalPrice}
        case BasketActionName.REMOVE_ORDER:
            return {...state,
                orders: state.orders.filter((order)=>order.productName != action.order.productName), totalPrice: Number(state.totalPrice) - Number(action.order.totalPrice)}
        default:
            return state;
            break;
    }


}


export const BasketActionCreators={
    setOrder: (order:IOrder):BasketActions=>({type: BasketActionName.SET_ORDER, order }),
    setOrders: (orders:IOrder[]):BasketActions=>({type: BasketActionName.SET_ORDERS, orders }),
    removeOrder:(order:IOrder):BasketActions=>({type: BasketActionName.REMOVE_ORDER, order}),
    setTotalPrice:(totalPrice: number):BasketActions=>({type: BasketActionName.SET_TOTAL_PRICE,totalPrice }),

    localStorageOrders:(order:IOrder)=>(dispatch:AppDispatch)=>{
            const orders = localStorage.getItem('orders') || '[]';
            const json = JSON.parse(orders) as IOrder[];

            json.push(order)
            dispatch(BasketActionCreators.setOrder(order))
            localStorage.setItem('orders', JSON.stringify(json))
            const totalPrice = localStorage.getItem('totalPrice') || '0';
        const jsonTotalPrice = JSON.parse(totalPrice);
        localStorage.setItem('totalPrice', JSON.stringify(Number(jsonTotalPrice) + Number(order.totalPrice)))
        dispatch(BasketActionCreators.setTotalPrice(Number(jsonTotalPrice) + Number(order.totalPrice)))

    },
    acceptOrders:()=>(dispatch:AppDispatch)=>{
        //axios
        localStorage.clear();
        dispatch(BasketActionCreators.setOrders([]));
    },
    deleteOrderThunk:(order:IOrder)=>(dispatch:AppDispatch)=>{
        const orders = localStorage.getItem('orders') || '[]';

        const json = JSON.parse(orders) as IOrder[];
        for(let i = 0; i <json.length; i++){
            if ( json[i].productName === order.productName ) {
                json.splice(i,1);
            }
        }
        localStorage.setItem('orders', JSON.stringify(json))
        dispatch(BasketActionCreators.removeOrder(order))
        const totalPrice = localStorage.getItem('totalPrice') || '0';
        const jsonTotalPrice = JSON.parse(totalPrice);
        localStorage.setItem('totalPrice', JSON.stringify(Number(jsonTotalPrice) - Number(order.totalPrice)))
        dispatch(BasketActionCreators.setTotalPrice(Number(jsonTotalPrice) - Number(order.totalPrice)))
    }

}