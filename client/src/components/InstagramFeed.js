import React, { useState, useEffect } from 'react'
import Button from './Button'
import InstagramEmbed from 'react-instagram-embed';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

const getInstaProfile = require("user-instagram");


const InstagramFeed = () => {

    const [ instaState, setInstaState ] = useState([])

    useEffect(() => {
        handleInsta()
    });

    const handleInsta = () => {
        getInstaProfile("djbentleytaylor")
            .then(userData => {
            console.log(userData.posts)
            const myData = userData.posts.splice(0,6)
            setInstaState(myData)

            })
            .catch(console.error);
    }

    return (
        <div>
            <h1 className="headlineTwo">Instagram</h1>
            {/* <Button btnContent="Test" btnAction = {test} /> */}

            <CarouselProvider
            naturalSlideWidth={300}
            naturalSlideHeight={550}
            totalSlides={6}
            className="instaCarousel"
            isPlaying="true"
            infinite
            >
                {/* <ButtonBack className="carouselBtn"><FaAngleLeft /></ButtonBack> */}
                <Slider>
                {/* have pictures vary in how they are arrayed? have a modal effect? */}

                    { instaState.map((post,i) => 
                        <Slide index={i}><InstagramEmbed
                            key={post.id}
                            url={post.link}
                            maxWidth={180}
                            hideCaption={true}
                            containerTagName='div'
                            protocol=''
                            injectScript
                            onLoading={() => {}}
                            onSuccess={() => {}}
                            onAfterRender={() => {}}
                            onFailure={() => {}}
                            /></Slide>
                    )}
                </Slider>
                {/* <ButtonNext className="carouselBtn"><FaAngleRight /></ButtonNext> */}
            </CarouselProvider>
            
        </div>
    )
}

export default InstagramFeed