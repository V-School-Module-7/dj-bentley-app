import React from 'react'
import Header from './Header'
import MusicPlayer from './MusicPlayer'
import FellowDjs from './FellowDjs'
import ImageGallery from './ImageGallery'

const Home = (props) => {
    return (
        <div>
            <div className="headerImg"></div>
            <Header openAboutModal={props.openAboutModal} openBookModal={props.openBookModal} locPath={props.locPath} />

            <div className="musicFellow">
                <MusicPlayer />
                <FellowDjs />
            </div>

            <ImageGallery />
        </div>
    )
}

export default Home