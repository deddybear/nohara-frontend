import React from 'react'
import HeaderComponent from '../../components/header/header.component'
import CarouselComponent from '../../components/carousel/carousel.component'
import photos from '../../data/photos.dummy'
import LayananComponent from '../../components/layanan/layanan.components'

class HomePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            dummyPhotos : photos
        }
    }

    render() {
        return(
            <div>
                <HeaderComponent/>
                <div className='w-75 h-50 mx-auto my-3'>
                    <CarouselComponent listData={this.state.dummyPhotos}/>
                </div>
                <div className='w-75 h-10 mx-auto my-3'>
                    <LayananComponent text="Layanan Jasa Kami"/>
                </div>
            </div>
        )
    }
}

export default HomePage