import React from 'react'
import './layanan.component.css'

const LayananComponent = ({text}) => (
    <div className='background-component text-white text-center p-4 my-4'>
        <p className='text-service m-0 fs-3'>
            {text.toUpperCase()}
        </p>
    </div>
);

export default LayananComponent