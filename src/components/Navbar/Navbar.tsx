
import { HomeOutlined, ShoppingOutlined } from '@ant-design/icons'
import { Layout, Menu, Row } from 'antd'
import React, { FC } from 'react'
import { useHistory } from 'react-router'
import { RoutePath } from '../../routing/routes'

const Navbar: FC = () => {

    const router = useHistory()

    return (
        <Layout.Header>
            <Row justify='space-between' className='container' align='middle'>

                <Menu theme='dark' mode='horizontal' selectable={false}>
                    <Menu.Item
                        onClick={() => router.push(RoutePath.PRODUCT_CONTENT)}
                        icon={<HomeOutlined style={{ fontSize: '2em', color: 'antiquewhite' }} />}
                        key={1} >
                    </Menu.Item>
                </Menu>
                <Menu theme='dark' mode='horizontal' selectable={false}>

                    <Menu.Item
                        onClick={() => router.push(RoutePath.BASKET)}
                        icon={<ShoppingOutlined  className="Basket_icon" style={{ fontSize: '2em', color: 'gold' }}  title='1'/>}
                        key={1} >
                    </Menu.Item>

                </Menu>


            </Row>
        </Layout.Header>

    )
}

export default Navbar
