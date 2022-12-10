import React from 'react'
import Slider from 'react-slick';
import './portofolio.component.styles.css';

const handleClickLink = (linkUrl) => {
    return window.open(linkUrl, '_blank')
}

const settings = {
    dots: true,
    fade: true,
    speed: 1000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
}

const PortofolioComponent = ({dataList}) => (
    <div className='col-12 background-component text-white text-center py-5'>
        <div className='col-11 col-md-9 mx-auto bg-img p-3 rounded-3'>
            <p className='text-portofolio m-0 fs-6'>Portofolio Kami</p>
        </div>
        <div className='col-11 col-md-9 mx-auto my-5'>
            <Slider {...settings}>
                {
                    dataList.map(
                        (item, index) => 
                        <div key={`portofolio_data_${index}`}>
                            <img className='w-100' src={item.photos} alt={`portofolio_${index}`}></img>
                        </div>
                    )
                }
            </Slider>
        </div>
        <div className='col-11 col-md-9 mx-auto bg-link-gallery rounded-3' 
                onClick={() => handleClickLink('https://gallery.nohara.my.id/')}>
            <p className='text-dark text-link m-0 fs-6'>Lorem Ipsum</p>
        </div>
    </div>
)

export default PortofolioComponent;