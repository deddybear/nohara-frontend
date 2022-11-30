import React from 'react'
import HeaderComponent from '../../components/header/header.component'
import CarouselComponent from '../../components/carousel/carousel.component'
import LayananComponent from '../../components/layanan/layanan.components'
import CardService from '../../components/card-services/card-services.component'
import PortofolioComponent from '../../components/portofolio/portofolio.component'
import photos from '../../data/photos.dummy'
import service from '../../data/service.dummy'
import portofolio from '../../data/portofolio.dummy'
import { Row } from 'react-bootstrap'
import AboutComponent from '../../components/about-us/about-us.component'
import AboutData from '../../data/about.dummy'
import ContactData from '../../data/contact.dummy'


class HomePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            dataCaraousel : photos,
            dataCardService : service,
            dataPortofolio : portofolio,
            dataCompany: AboutData,
            dataContact : ContactData
        }
    }

    render() {
        return(
            <div className='justify-content-md-center section-of-content'>
                <HeaderComponent/>
                <div className='w-75 h-50 mx-auto my-3'>
                    <CarouselComponent listData={this.state.dataCaraousel}/>
                </div>
                <div className='w-75 h-10 mx-auto my-3'>
                    <LayananComponent text="Lorem Ipsum Dolor"/>
                    <Row>
                        {
                            this.state.dataCardService.map(
                                (item, index) => 
                                <CardService data={item} index={index} key={`service_${index}`}/>
                            )
                        }
                    </Row>
                </div>
                <PortofolioComponent dataList={this.state.dataPortofolio}/>
                <div className='w-75 mx-auto'>
                    <AboutComponent aboutCompany={this.state.dataCompany} aboutContact={this.state.dataContact}/>
                </div>
            </div>
        )
    }
}

export default HomePage