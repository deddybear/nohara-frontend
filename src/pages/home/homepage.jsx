import React from 'react'
import HeaderComponent from '../../components/header/header.component'
import CarouselComponent from '../../components/carousel/carousel.component'
import LayananComponent from '../../components/layanan/layanan.components'
import CardService from '../../components/card-services/card-services.component'
import photos from '../../data/photos.dummy'
import service from '../../data/service.dummy'
import { Row } from 'react-bootstrap'

class HomePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            dataCaraousel : photos,
            dataCardService : service
        }
    }

    render() {
        return(
            <div>
                <HeaderComponent/>
                <div className='w-75 h-50 mx-auto my-3'>
                    <CarouselComponent listData={this.state.dataCaraousel}/>
                </div>
                <div className='w-75 h-10 mx-auto my-3'>
                    <LayananComponent text="Lorem Ipsum Dolor"/>
                    <Row>
                        {
                            this.state.dataCardService.map((item, index) => <CardService data={item} />)
                        }
                    </Row>
                </div>
            </div>
        )
    }
}

export default HomePage