import { Button, Modal } from 'antd';
import React, { FC, useState } from 'react'
import { IProduct } from '../../../types/product';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { useActionCreators } from '../../../hooks/useAC';


interface IModal {
    isModalVisible: boolean;
    setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    product: IProduct;
}

const ProductCardModal: FC<IModal> = (props) => {
    const { img, price, productName } = props.product
    const [countValue, setCountValue] = useState<number>(1)
    const [totalPrice, setTotalPrice] = useState<number>(price)
    const { localStorageOrders, pushProduct } = useActionCreators()

    const handleOk = () => {
        if (countValue === 0) return; //warn
        props.setIsModalVisible(false);
        localStorageOrders({ img, productName, countValue, totalPrice, price, inBasket: true });
        pushProduct({ productName, img, price, totalPrice, inBasket: true })
    };

    const handleCancel = () => {
        props.setIsModalVisible(false);
    };


    const upValue = () => {
        setCountValue((Value) => Value + 1)
        if ((countValue + 1) % 3 === 0) {
            setTotalPrice((totalPrice) => totalPrice = Number(totalPrice) + (Number(price) / 2))
            return
        }
        setTotalPrice((totalPrice) => totalPrice = Number(totalPrice) + Number(price))

    }
    const downValue = () => {
        if (countValue > 1) {
            setCountValue((Value) => Value - 1)
            if ((countValue) % 3 === 0) {
                setTotalPrice((totalPrice) => totalPrice = Number(totalPrice) - (Number(price) / 2))
                return
            }

            setTotalPrice((totalPrice) => totalPrice = Number(totalPrice) - Number(price))
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
