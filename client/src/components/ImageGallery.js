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
            totalSlides={40} //changes number of slides. 
            infinite='true'
            isPlaying='true'
            className="imageGallery"
        >
            <ButtonBack className='imgGalBtn'><FaCaretLeft /></ButtonBack>
            
            <Slider className='iGSlider'>
                <Slide index={0}><Image className="iGImage" src={require('../assets/DressedUp.jpg')} /></Slide>
                <Slide index={1}><Image className="iGImage" src={require('../assets/BentleyEdited/Dj-Bentley-Taylor-6.jpg')} /></Slide>
                <Slide index={2}><Image className="iGImage" src={require('../assets/BentleyEdited/Dj-Bentley-Taylor-8.jpg')} /></Slide>
                <Slide index={3}><Image className="iGImage" src={require('../assets/IMG_6271.JPG')} /></Slide>
                <Slide index={4}><Image className="iGImage" src={require('../assets/bentleyLights.jpg')} /></Slide>
                <Slide index={5}><Image className="iGImage" src={require('../assets/feb18.jpg')} /></Slide>
                <Slide index={6}><Image className="iGImage" src={require('../assets/gal2.jpg')} /></Slide>
                <Slide index={7}><Image className="iGImage" src={require('../assets/gal4.jpg')} /></Slide>
                <Slide index={8}><Image className="iGImage" src={require('../assets/gal5.jpg')} /></Slide>
                <Slide index={9}><Image className="iGImage" src={require('../assets/gal6.jpg')} /></Slide>
                <Slide index={10}><Image className="iGImage" src={require('../assets/gal8.jpg')} /></Slide>
                <Slide index={11}><Image className="iGImage" src={require('../assets/gal9.jpg')} /></Slide>
                <Slide index={12}><Image className="iGImage" src={require('../assets/gal10.png')} /></Slide>
                <Slide index={13}><Image className="iGImage" src={require('../assets/gal11.jpg')} /></Slide>
                <Slide index={14}><Image className="iGImage" src={require('../assets/gal12.jpg')} /></Slide>
                <Slide index={15}><Image className="iGImage" src={require('../assets/gal13.jpg')} /></Slide>
                <Slide index={16}><Image className="iGImage" src={require('../assets/gal14.jpg')} /></Slide>
                <Slide index={17}><Image className="iGImage" src={require('../assets/gal19.jpg')} /></Slide>
                <Slide index={18}><Image className="iGImage" src={require('../assets/gal16.jpg')} /></Slide>
                <Slide index={19}><Image className="iGImage" src={require('../assets/gal17.jpg')} /></Slide>
                <Slide index={20}><Image className="iGImage" src={require('../assets/gal18.jpg')} /></Slide>
                <Slide index={21}><Image className="iGImage" src={require('../assets/gal19.jpg')} /></Slide>
                <Slide index={22}><Image className="iGImage" src={require('../assets/gal23.jpg')} /></Slide>
                <Slide index={23}><Image className="iGImage" src={require('../assets/gal25.jpg')} /></Slide>
                <Slide index={24}><Image className="iGImage" src={require('../assets/gal27.jpeg')} /></Slide>
                <Slide index={25}><Image className="iGImage" src={require('../assets/gal28.PNG')} /></Slide>
                <Slide index={26}><Image className="iGImage" src={require('../assets/gal29.PNG')} /></Slide>
                <Slide index={27}><Image className="iGImage" src={require('../assets/gal31.PNG')} /></Slide>
                <Slide index={28}><Image className="iGImage" src={require('../assets/IMG_0814.PNG')} /></Slide>
                <Slide index={29}><Image className="iGImage" src={require('../assets/IMG_0816.PNG')} /></Slide>
                <Slide index={30}><Image className="iGImage" src={require('../assets/IMG_0817.PNG')} /></Slide>
                <Slide index={31}><Image className="iGImage" src={require('../assets/IMG_0820.PNG')} /></Slide>
                <Slide index={32}><Image className="iGImage" src={require('../assets/IMG_0822.PNG')} /></Slide>
                <Slide index={33}><Image className="iGImage" src={require('../assets/IMG_0823.PNG')} /></Slide>
                <Slide index={34}><Image className="iGImage" src={require('../assets/IMG_4192.JPG')} /></Slide>
                <Slide index={35}><Image className="iGImage" src={require('../assets/IMG_0832.PNG')} /></Slide>
                <Slide index={36}><Image className="iGImage" src={require('../assets/IMG_0833.PNG')} /></Slide>
                <Slide index={37}><Image className="iGImage" src={require('../assets/IMG_0835.PNG')} /></Slide>
                <Slide index={38}><Image className="iGImage" src={require('../assets/IMG_0839.PNG')} /></Slide>
                <Slide index={39}><Image className="iGImage" src={require('../assets/tall-backstage.jpeg')} /></Slide>
            </Slider>
            <ButtonNext className='imgGalBtn'><FaCaretRight /></ButtonNext>
            
        </CarouselProvider>
        );
    }
}

//the amount of slides must equal the number on line 12
//the slides must have the specified index in the correct order. It helps specify the order
//more information to be found on https://www.npmjs.com/package/pure-react-carousel