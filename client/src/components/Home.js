import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import Carousel from './Carousel'
import About from './About'
import MusicPlayer from './MusicPlayer'
import FellowDjs from './FellowDjs'
import InstagramFeed from './InstagramFeed'

const Home = () => {
    const btnTest = () => {
        console.log("link to Event page")
    }

    return (
        <div className="homePage">
            <div className="actionImage"></div>

            <div className="contentWrap">

                <h1 className="headlineOne">headline one</h1>

                <h1 className="headlineTwo">headline two</h1>

                <h4 className="subTitle">subtitle</h4>

                <p className="bodyText">body</p>

                <h2 className="homeQuote">“I like to step out of the box and be as creative as possible, put things together that people don’t think they would hear together.” <span className="homeQuoteSignoff">- DJ Bentley</span></h2>

                <MusicPlayer />
                
                <Carousel />

                <About />

                <InstagramFeed />

                <FellowDjs />

                <Link to="/event"><Button btnContent="Want to Book an event?" btnAction = {btnTest} /></Link>

            </div>
        </div>
    )
}

export default Home