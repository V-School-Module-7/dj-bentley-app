import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import About from './About'
import MusicPlayer from './MusicPlayer'
import FellowDjs from './FellowDjs'
import InstagramFeed from './InstagramFeed'

const HomePast = () => {
    const btnTest = () => {
        console.log("link to Event page")
    }

    return (
        <div className="homePage">

            
            <div className="actionImage"></div>

            <div className="contentWrap">

                <h2 className="homeQuote">“I like to step out of the box and be as creative as possible, put things together that people don’t think they would hear together.” <span className="homeQuoteSignoff">- DJ Bentley</span></h2>

                <div id="mixes"></div>
                
                <MusicPlayer />

                <div id="about"></div>

                <About />

                <div id="instagram"></div>

                <div className="imagesDiv section">

                    <InstagramFeed />
                </div>

                <div id="performed"></div>

                <FellowDjs />

                <Link to="/event"><Button btnContent="Want to Book an event?" btnAction = {btnTest} /></Link>

            </div>
        </div>
    )
}

export default HomePast