import React from 'react'
import {createBrowserRouter} from "react-router-dom";
import App from '../App';
import LoginPage from '../pages/login/LoginPage';

const WebRoutes = createBrowserRouter([
    {
        path : "/",
        element: <App/>
    },
    {
        path: "/login",
        element: <LoginPage/>
    }
])


export default WebRoutes