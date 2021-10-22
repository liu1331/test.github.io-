
import React, { FC } from 'react'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Button } from 'antd';

interface IChangeValue{
    upValue:()=> void,
    downValue:()=> void,
    countValue: number
}

const ChahgeValue:FC<IChangeValue> = (props) => {


    const {countValue,upValue, downValue} = props


    return (
        <div className= 'ModalContent__PriceInfo__ChangeValue___item'>
                        <div className="ModalContent__PriceInfo__item">
                            <Button onClick={() => upValue()} type="primary" shape="circle" icon={<PlusOutlined />} />
                        </div>
                        <div className="ModalContent__PriceInfo__item">
                            <span>{countValue}</span>
                        </div>
                        <div className="ModalContent__PriceInfo__item">
                            <Button onClick={() => downValue()} type="primary" shape="circle" icon={<MinusOutlined />} />
                        </div>
        </div>
    )
}

export default ChahgeValue
