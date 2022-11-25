import React from 'react'


const LayananComponent = ({text}) => (
    <div className='bg-dark text-white text-center p-3'>
        <h1>
            {text.toUpperCase()}
        </h1>
    </div>
);

export default LayananComponent