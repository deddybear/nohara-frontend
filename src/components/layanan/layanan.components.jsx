import React from 'react'
import './layanan.component.css'

const LayananComponent = ({text}) => (
    <div className='bg-dark text-white text-center p-4 my-4'>
        <p className='text-service'>
            {text.toUpperCase()}
        </p>
    </div>
);

export default LayananComponent