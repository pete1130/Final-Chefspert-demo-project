import React from 'react';
import Slider from 'react-slick';


const HomeSlider = (props) => {

    const slides = [
        {
            img: '/featured/baked.jpg',
            lineOne: 'Homemade Food',
            lineTwo: 'On Demand'
        }
    ]

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: false
    }
    
    const generateSlides = () => (
        slides ? 
            slides.map((item,i)=>(
               <div key={i}>
                   <div className = "featured_image"
                    style={{
                        background: `url(${item.img})`,
                        height: `${window.innerHeight}px`}}>
                    <div className="featured_action">
                        <div className="tag title">{item.lineOne}</div>
                        <div className="tag low_title">{item.lineTwo}</div>
                    </div>
                    </div>
                </div> 
              
            ))
        :null
    )

    return (
        <div className="featured_container">
            <Slider {...settings}>
                {generateSlides()}
            </Slider>
        </div>
       
    );

}

export default HomeSlider;