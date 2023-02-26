/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { Carousel } from "react-bootstrap";
import './carousel.component.styles.css'

const CarouselComponent = ({listData}) => (
    <Carousel className='my-1'>
        {
            listData.map((item, index) => <Carousel.Item className='h-10' key={index}>
                <img
                    className='w-100 col-6'
                    src={`${process.env.REACT_APP_SERVER_URL}${item.path}`}
                    alt={`img_${index}`}
                />
            </Carousel.Item> )
        }

    </Carousel>
)

export default CarouselComponent