import { Button } from 'antd'
import { FC, useEffect, useState} from 'react'
import Order from '../components/Basket/Order'
import { useActionCreators } from '../hooks/useAC'
import { UseTypedSelector } from '../hooks/useTypedSelector'




const Basket: FC = () => {
    const { orders, totalPrice } = UseTypedSelector(state => state.Basket)
    const { acceptOrders  } = useActionCreators()
    const accept = () => {
        acceptOrders()
    }


    const storage = localStorage.getItem('orders') || '[]';
    const json = JSON.parse(storage)


    return (

        <div className='Basket_content container'>

            <div className='Orders_flex'>
                {orders.length > 0 ?
                    orders.map((order) => <Order key={order.productName}  {...order} />)
                    :
                    <div style={{width:'100%', height:'100%', textAlign:'center', paddingTop:'30%'}}><h1> У вас нету товаров в корзине:(</h1></div>
                }
                <div className='Order_item'>
                <div className='Order_item__title'>
                {json.length > 0 ?
                    <h1 style={{color:'goldenrod'}}>{'Сума к оплате: $'+ totalPrice}</h1> : null
                }
                </div>
                <div>
                {json.length > 0 ?
                    <Button size='large' style={{marginRight:'25px'}} onClick={() => accept()} danger>Оформить заказ</Button> : null
                }
                </div>
                </div>
            </div>
        </div>
    )
}

export default Basket

