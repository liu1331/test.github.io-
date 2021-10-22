import { IOrder } from "../../../types/order"
import { AppDispatch } from "../../store";
import { BasketActionName, BasketActions, IBasketState } from "./BasketOrderType"

const InitalState: IBasketState = {
    orders: [],
    totalPrice: 0
}

export function BasketReducer(state = InitalState, action: BasketActions) {
    switch (action.type) {

        case BasketActionName.SET_ORDER:
            return { ...state, orders: [...state.orders, action.order], totalPrice: Number(state.totalPrice) + Number(action.order.totalPrice) }

            break;
        case BasketActionName.SET_ORDERS:

            return { ...state, orders: [...action.orders] }
        case BasketActionName.SET_TOTAL_PRICE:
        const newTotalPrice = state.orders.reduce(function (prev, curr) {
            return prev + curr.totalPrice
    }, 0)

        return {...state, totalPrice:newTotalPrice }
        case BasketActionName.REMOVE_ORDER:
            return {
                ...state,
                orders: state.orders.filter((order) => order.productName != action.order.productName), totalPrice: Number(state.totalPrice) - Number(action.order.totalPrice)
            }
        case BasketActionName.CHANGE_ORDER_VALUE_ACTION:
            return {
                ...state,
                orders: state.orders.map((order)=>{
                    if (order.productName ===action.productName){
                        return {...order, countValue: action.countValue, totalPrice: action.totalPrice}
                    }else{
                        return {...order}
                    }
                })
            }
        default:
            return state;
            break;
    }


}


export const BasketActionCreators = {
    setOrder: (order: IOrder): BasketActions => ({ type: BasketActionName.SET_ORDER, order }),
    setOrders: (orders: IOrder[]): BasketActions => ({ type: BasketActionName.SET_ORDERS, orders }),
    removeOrder: (order: IOrder): BasketActions => ({ type: BasketActionName.REMOVE_ORDER, order }),
    setTotalPriceAction: (): BasketActions => ({ type: BasketActionName.SET_TOTAL_PRICE }),
    cahngeValueOrdeAction: (productName:string, totalPrice:number, countValue:number): BasketActions => ({ type: BasketActionName.CHANGE_ORDER_VALUE_ACTION, productName, totalPrice, countValue }),

    localStorageOrders: (order: IOrder) => (dispatch: AppDispatch) => {
        const orders = localStorage.getItem('orders') || '[]';
        const json = JSON.parse(orders) as IOrder[];

        json.push(order)
        dispatch(BasketActionCreators.setOrder(order))
        localStorage.setItem('orders', JSON.stringify(json))
        const totalPrice = localStorage.getItem('totalPrice') || '0';
        const jsonTotalPrice = JSON.parse(totalPrice);
        localStorage.setItem('totalPrice', JSON.stringify(Number(jsonTotalPrice) + Number(order.totalPrice)))
        dispatch(BasketActionCreators.setTotalPriceAction())

    },
    acceptOrders: () => (dispatch: AppDispatch) => {
        //axios
        localStorage.clear();
        dispatch(BasketActionCreators.setOrders([]));
    },
    deleteOrderThunk: (order: IOrder) => (dispatch: AppDispatch) => {
        const orders = localStorage.getItem('orders') || '[]';

        const jsonOrders = JSON.parse(orders) as IOrder[];
        for (let i = 0; i < jsonOrders.length; i++) {
            if (jsonOrders[i].productName === order.productName) {
                jsonOrders.splice(i, 1);
            }
        }
        localStorage.setItem('orders', JSON.stringify(jsonOrders))
        dispatch(BasketActionCreators.removeOrder(order))
        const totalPrice = localStorage.getItem('totalPrice') || '0';
        const jsonTotalPrice = JSON.parse(totalPrice);
        localStorage.setItem('totalPrice', JSON.stringify(Number(jsonTotalPrice) - Number(order.totalPrice)))
        dispatch(BasketActionCreators.setTotalPriceAction())
    },
    changeValueOrder:(productName:string, totalPrice:number, countValue:number)=>(dispatch: AppDispatch)=>{
        const orders = localStorage.getItem('orders') || '[]';
        const jsonOrders = JSON.parse(orders) as IOrder[];
        for (let i = 0; i < jsonOrders.length; i++) {
            if (jsonOrders[i].productName === productName) {
                jsonOrders[i].countValue = countValue;
                jsonOrders[i].totalPrice = totalPrice;
            }
        }
        localStorage.setItem('orders', JSON.stringify(jsonOrders))
        localStorage.setItem('totalPrice', JSON.stringify(jsonOrders.reduce(function(prev, curr) { return prev + curr.totalPrice},0)))
        dispatch(BasketActionCreators.setOrders(jsonOrders));
        dispatch( BasketActionCreators.setTotalPriceAction())

    }


}