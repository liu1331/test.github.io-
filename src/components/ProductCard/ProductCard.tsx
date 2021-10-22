import { Button, Card, Col, Row } from 'antd'
import Meta from 'antd/lib/card/Meta'
import style from './ProductCard.module.css'

import { FC, useEffect, useState } from 'react'
import { IProduct } from '../../types/product'
import ProductCardModal from './ProductCardModal/ProductCardModal'
import { IOrder } from '../../types/order'

const ProductCard: FC<IProduct> = (props) => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [btn, setBtn] = useState(false)

    useEffect(() => {
        const orders = localStorage.getItem('orders') || '[]';
        const json = JSON.parse(orders) as IProduct[];
        if (json.length > 0) {
            json.map((j) => {
            if (j.productName === props.productName) {
                setBtn(true)}
        })
        }

    })
    const showModal = () => {
        setIsModalVisible(true);

    };
    return (
        <div className={style.item}>
            <Card
                hoverable
                style={{ width: '300px', display: "flex", flexDirection: 'column', alignItems: 'center', flex: "0 1 33.333%" }}
                cover={<div className={style.CardImg}><img alt="imgProduct" src={props.img} /></div>}
            >
                <Meta title={props.productName} description={'$' + props.price} style={{ textAlign: 'center', marginBottom: '15px' }} />
                {btn === true ?
                    <Button disabled={true} type="dashed" onClick={() => showModal()}> В корзине </Button>
                    :
                    <Button disabled={false} type="dashed" danger onClick={() => showModal()}> Купить </Button>

                }

            </Card>

            <ProductCardModal product={props} isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
        </div>

    )
}

export default ProductCard
