import { Button, Modal } from 'antd';
import React, { FC, useState } from 'react'
import { IProduct } from '../../../types/product';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { useActionCreators } from '../../../hooks/useAC';
import { Discount } from '../../../hooks/useDiscount';


interface IModal {
    isModalVisible: boolean;
    setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    product: IProduct;
}

const ProductCardModal: FC<IModal> = (props) => {
    const { img, price, productName, discount } = props.product
    const { localStorageOrders, pushProduct } = useActionCreators()
    const [countValue, setCountValue] = useState<number>(1)
    const [totalPrice, setTotalPrice] = useState<number>(price)


    const handleOk = () => {
        if (countValue === 0) return; //warn
        props.setIsModalVisible(false);
        localStorageOrders({ img, productName, countValue, totalPrice, price, inBasket: true, discount});
        pushProduct({ productName, img, price, totalPrice, inBasket: true, discount })

    };

    const handleCancel = () => {
        props.setIsModalVisible(false);
        setCountValue(1)
        setTotalPrice(price)
    };


    const upValue = () => {
        setCountValue((Value) => Value + 1)
        const newPrice = Discount({ countValue, discount, price })
        setTotalPrice((totalPrice) => totalPrice = Number(totalPrice) + Number(newPrice))

    }
    const downValue = () => {
        if (countValue > 1) {
            setCountValue((Value) => Value - 1)
            const newPrice = Discount({ countValue, discount, price })
            setTotalPrice((totalPrice) => totalPrice = Number(totalPrice) - Number(newPrice))
        }
    }
    return (
        <>
            <Modal title="Заказ" visible={props.isModalVisible} onOk={() => handleOk()} okText='Добавить в корзину' cancelText='Отмена' onCancel={handleCancel}>
                <div className='ModalContent'>
                    <div className="ModalContent__info">
                        <div>
                            <img src={img} alt="" />
                        </div>
                        <div>
                            <span>{productName}</span>
                        </div>

                    </div>
                    <div className="ModalContent__PriceInfo">
                        <div className="ModalContent__PriceInfo__item">
                            <Button onClick={() => upValue()} type="primary" shape="circle" icon={<PlusOutlined />} />
                        </div>
                        <div className="ModalContent__PriceInfo__item">
                            <span>{countValue}</span>
                        </div>
                        <div className="ModalContent__PriceInfo__item">
                            <Button onClick={() => downValue()} type="primary" shape="circle" icon={<MinusOutlined />} />
                        </div>
                        <div className="ModalContent__PriceInfo__item">
                            <h1 style={{ fontWeight: 'normal' }}>Сумма</h1>
                            <h2 style={{ fontWeight: 'bold', color: 'chocolate' }}>${totalPrice}</h2>
                        </div>
                    </div>

                </div>
            </Modal>
        </>
    );
}

export default ProductCardModal
