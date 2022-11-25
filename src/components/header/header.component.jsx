import React from 'react'
import {Container} from "react-bootstrap"
import './header.component.styles.css'
import logo from '../../assets/logo_viscape.png';

const HeaderComponent = () => (
        <div className='header-section text-center my-1'>
            <img className='w-50 h-50' src={logo} alt='logo-web' />
        </div>
)

export default HeaderComponent