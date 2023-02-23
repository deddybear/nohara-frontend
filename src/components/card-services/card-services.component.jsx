import React from 'react'
import { Card, Carousel } from 'react-bootstrap'
import './card-services.component.styles.css';

const CardService = ({data, index}) => (
    <Card className='col-12 col-md-4 border-0'>
        <div className='header-bg header-text my-3 text-white text-center p-2' key={`name_service_${index}`}>{data.name}</div>
        <Card.Body className='p-0'>
            <Carousel>
                {
                    data.photos.map((item, index) => 
                        <Carousel.Item key={index}>
                            <img className='col-12' height={460} src={`${process.env.REACT_APP_SERVER_URL}${item.path}`} alt={`img_service_${index}`}></img>
                        </Carousel.Item>)
                }
            </Carousel>
        </Card.Body>
    </Card>
)

export default CardService