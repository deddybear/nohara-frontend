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
                <CarouselComponent listData={this.state.dummyPhotos}/>
                <LayananComponent></LayananComponent>
            </div>
        )
    }
}

export default HomePage