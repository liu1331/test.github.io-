


import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { RoutePath, Routes } from '../../routing/routes'

const AppRouter = () => {
    return (
        <Switch>
            {Routes.map((route)=><Route path={route.path} component={route.component} exact={route.exact}/>)}
            <Redirect to={RoutePath.PRODUCT_CONTENT}/>
        </Switch>
    )
}

export default AppRouter
