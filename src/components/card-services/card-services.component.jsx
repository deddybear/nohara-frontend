import React from 'react'
import { Card, Carousel } from 'react-bootstrap'
import './card-services.component.styles.css';

const CardService = ({data}) => (
    <Card className='col-4 border-0'>
        <div className='header-bg header-text mb-3 text-white text-center p-2'>{data.name}</div>
        <Card.Body className='p-0'>
            <Carousel>
                {
                    data.photos.map((item, index) => 
                        <Carousel.Item key={index}>
                            <img src={item.path} alt={`service_${index}`}></img>
                        </Carousel.Item>)
                }
            </Carousel>
        </Card.Body>
    </Card>
)

export default CardService