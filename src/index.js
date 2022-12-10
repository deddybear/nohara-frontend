import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import WebRoutes from './routes/web';
import {createStore}  from 'redux';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'

const globalState = {
    open : false,
    // theme : useTheme(),
    drawerWidth : 240
}

const rootReducer = (state = globalState, action ) => {
    if(action.type === 'OPEN_SIDEBAR') {
        return {
            ...state,
            open: true
        }
    }

    if (action.type === 'CLOSE_SIDEBAR') {
        return {
            ...state,
            open: false
        }
    }
    return state;
}

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <RouterProvider router={WebRoutes}/>
        </React.StrictMode>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
