import { CloseOutlined } from '@ant-design/icons'
import React, { FC } from 'react'
import { useActionCreators } from '../../hooks/useAC'
import { IOrder } from '../../types/order'

const Order: FC<IOrder> = (props) => {
const {deleteOrderThunk} = useActionCreators()
const { img,
    productName,
    price,
    countValue,
    totalPrice,
    inBasket} = props

    return (
        <div className='Orders_item' >
            <div className='Orders_item__img'>
                <img src={img} alt="" />
            </div>
            <div style={{textAlign:'center', marginRight:'25%', }}>
            <div className='Orders_item__title' style={{fontSize: '24px', fontWeight:'bold' }}>
                {productName}
            </div>
            <div className='Orders_item__Price' style={{fontSize: '18px'}}>
               Цена ${price}
            </div>

            </div>

            <div className='Orders_item__TotalPrice' style={{fontSize:'50px', fontWeight:'bolder'}}>
                ${totalPrice}
            </div>
            <div className='Orders_item__deleteBtn'>
            <CloseOutlined onClick={()=> deleteOrderThunk({img,
    productName,
    price,
    countValue,
    totalPrice,
    inBasket})} className='Delete_Btn' style={{fontSize:'40px', cursor:'pointer'}} />
            </div>
        </div>

    )
}

export default Order
