import { Modal } from 'antd';
import React, { FC, useState } from 'react'
import { IProduct } from '../../../types/product';
import { useActionCreators } from '../../../hooks/useAC';
import ChahgeValue from '../../ChangeValue/ChahgeValue';
import { useChangeValue } from '../../../hooks/useChangeValue';


interface IModal {
    isModalVisible: boolean;
    setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    product: IProduct;
}

const ProductCardModal: FC<IModal> = (props) => {
    const { img, price, productName, discount } = props.product
    const { localStorageOrders, pushProduct } = useActionCreators()

    const {countValueInHook, setCountValue, totalPriceInHook, setTotalPrice, upValue, downValue
    } = useChangeValue({productName, discount, price} )

    const handleOk = () => {
        if (countValueInHook === 0) return; //warn
        props.setIsModalVisible(false);
        localStorageOrders({ img, productName, countValue:countValueInHook, totalPrice: totalPriceInHook, price, inBasket: true, discount});
        pushProduct({ productName, img, price, totalPrice: totalPriceInHook, inBasket: true, discount })

    };

    const handleCancel = () => {
        props.setIsModalVisible(false);
        setCountValue(1)
        setTotalPrice(price)
    };

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
                        <ChahgeValue countValue={countValueInHook} upValue ={upValue} downValue={downValue} />

                        <div className="ModalContent__PriceInfo__item">
                            <h1 style={{ fontWeight: 'normal' }}>Сумма</h1>
                            <h2 style={{ fontWeight: 'bold', color: 'chocolate' }}>${totalPriceInHook}</h2>
                        </div>
                    </div>

                </div>
            </Modal>
        </>
    );
}

export default ProductCardModal
