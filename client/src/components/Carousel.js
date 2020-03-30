import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup, Image } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'

import tallbackstage from '../assets/tall-backstage.jpeg'
import talllaptop from '../assets/tall-laptopWorking.jpeg'
import tallprofess from '../assets/tall-professLean.jpeg'

export default class Carousel extends React.Component {
    render() {
        return (
        <CarouselProvider
            naturalSlideWidth={90}
            naturalSlideHeight={115}
            totalSlides={3}
            className="myCarousel"
            isPlaying="true"
            infinite
            // visibleSlides="2"
        >
            <h1 className="headlineTwo">Photos</h1>
            <Slider>
                {/* have pictures vary in how they are arrayed? have a modal effect? */}
                <Slide index={0}><Image src={tallbackstage} className="carouselImg" /></Slide>
                <Slide index={1}><Image src={talllaptop} className="carouselImg" /></Slide>
                <Slide index={2}><Image src={tallprofess} className="carouselImg" /></Slide>
            </Slider>

            {/* add dot component? */}

            {/* <div className="carouselNav">
                <ButtonBack className="carouselBtn"><FaAngleLeft /></ButtonBack>
                <DotGroup 
                    className="carouselDots" 
                    showAsSelectedForCurrentSlideOnly="true"
                    />
                <ButtonNext className="carouselBtn"><FaAngleRight /></ButtonNext>
            </div> */}

            
        </CarouselProvider>
        );
    }
}