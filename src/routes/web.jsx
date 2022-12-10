import React from 'react'
import {createBrowserRouter, createRoutesFromElements, defer, Route} from "react-router-dom";
import App from '../App';
import { AuthLayout } from '../components/auth-layout/AuthLayout';
import { Auth } from '../middleware/Auth';
import Dashboard from '../pages/dashboard/DashboardPage';
import LoginPage from '../pages/login/LoginPage';

const getUserData = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      const user = window.localStorage.getItem("user");
      resolve(user);
    }, 3000)
);

const WebRoutes = createBrowserRouter(
    createRoutesFromElements(
        <Route
            element={<AuthLayout/>}
            loader={() => defer({ userPromise: getUserData()})}
        >
            <Route path='/' element={<App/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/dashboard' element={<Auth/>}>
                <Route path='' element={<Dashboard/>}/>
            </Route>
        </Route>
    )
);


export default WebRoutes