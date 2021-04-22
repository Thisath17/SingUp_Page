import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {useAuth} from '../contexts/AuthContexts'

export default function PrivateRoute({component: Component, ...rest}) {

    const {currenrUser} = useAuth()

    return (
        <Route {...rest} 
        render = {props => {
            return currenrUser ? <Component {...props}/> : <Redirect to="/login"/>
        }}
        >
        </Route>
    )
}
