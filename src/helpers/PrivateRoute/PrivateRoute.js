import {useEffect, useState} from "react";
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

export const PrivateRoute = ({component: Component, authenticated, ...rest}) => {
    console.log("Private" + authenticated)

    return (
        <Route
            render={(props) => authenticated === true ?
                
            <Component {...rest} {...props} />
            :
            <Redirect to='/signin' />        
            }
        />
    )
}

PrivateRoute.propTypes = {
    component: PropTypes.func.isRequired
}