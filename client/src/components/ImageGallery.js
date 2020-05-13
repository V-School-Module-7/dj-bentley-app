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
            totalSlides={3} //changes number of slides
            infinite='true'
            isPlaying='true'
            className="imageGallery"
        >
            <ButtonBack className='imgGalBtn'><FaCaretLeft /></ButtonBack>
            
            <Slider className='iGSlider'>
                <Slide index={0}><Image className="iGImage" src={require('../assets/DressedUp.jpg')} /></Slide>
                <Slide index={1}><Image className="iGImage" src={require('../assets/BentleyEdited/Dj-Bentley-Taylor-6.jpg')} /></Slide>
                <Slide index={2}><Image className="iGImage" src={require('../assets/BentleyEdited/Dj-Bentley-Taylor-8.jpg')} /></Slide>
            </Slider>
            <ButtonNext className='imgGalBtn'><FaCaretRight /></ButtonNext>
            
        </CarouselProvider>
        );
    }
}

//the amount of slides must equal the number on line 12
//the slides must have the specified index in the correct order. It helps specify the order
//more information to be found on https://www.npmjs.com/package/pure-react-carousel