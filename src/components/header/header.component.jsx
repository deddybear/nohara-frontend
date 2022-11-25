import React from 'react'
import './header.component.styles.css'
import logo from '../../assets/logo_viscape.png';

const HeaderComponent = () => (
    <div className='header-section text-center my-1'>
        <img className='w-25 h-25' src={logo} alt='logo-web' />
    </div>
)

export default HeaderComponent