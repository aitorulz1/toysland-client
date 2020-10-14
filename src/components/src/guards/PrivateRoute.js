import React from 'react'
import {WithAuthConsumer} from '../../context/AuthContext'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({component: Component, isAuthenticated, ...rest} ) => {
    return (
          
                <Route {...rest} render = { (props) => {
                    if (isAuthenticated()) {
                        return(<Component {...props} />);
                    }
                    return <Redirect to="/login" />;
                }} />
            )}


export default WithAuthConsumer(PrivateRoute)