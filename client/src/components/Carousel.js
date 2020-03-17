import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class Carousel extends React.Component {
    render() {
        return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={35}
            totalSlides={3}
            className="carousel"
            isPlaying="true"
            infinite
            visibleSlides="2"
        >
            <Slider>
                {/* have pictures vary in how they are arrayed? have a modal effect? */}
                <Slide index={0}>I am the first Slide.</Slide>
                <Slide index={1}>I am the second Slide.</Slide>
                <Slide index={2}>I am the third Slide.</Slide>
            </Slider>

            {/* add dot component? */}

            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
        );
    }
}