import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, DotGroup } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'

export default class Carousel extends React.Component {
    render() {
        return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={35}
            totalSlides={4}
            className="myCarousel"
            // isPlaying="true"
            infinite
            visibleSlides="2"
        >
            
            <Slider>
                {/* have pictures vary in how they are arrayed? have a modal effect? */}
                <Slide index={0}>I am the first Slide.</Slide>
                <Slide index={1}>I am the second Slide.</Slide>
                <Slide index={2}>I am the third Slide.</Slide>
                <Slide index={3}>I am the fourth Slide.</Slide>
            </Slider>

            {/* add dot component? */}

            <div className="carouselNav">
                <ButtonBack className="carouselBtn"><FaAngleLeft /></ButtonBack>
                <DotGroup 
                    className="carouselDots" 
                    showAsSelectedForCurrentSlideOnly="true"
                    />
                <ButtonNext className="carouselBtn"><FaAngleRight /></ButtonNext>
            </div>

            
        </CarouselProvider>
        );
    }
}