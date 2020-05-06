import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FaCaretRight, FaCaretLeft } from 'react-icons/fa'
 
export default class extends React.Component {
    render() {
        return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={2}
            infinite='true'
            isPlaying='true'
            className="imageGallery"
        >
            <ButtonBack className='imgGalBtn'><FaCaretLeft /></ButtonBack>
            
            <Slider className='iGSlider'>
                <Slide index={0}><Image src={require('../assets/DressedUp.jpg')} /></Slide>
                <Slide index={1}><Image src={require('../assets/wide-fixingSleve.jpeg')} /></Slide>
            </Slider>
            <ButtonNext className='imgGalBtn'><FaCaretRight /></ButtonNext>
            
        </CarouselProvider>
        );
    }
}