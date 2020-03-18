import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import Carousel from './Carousel'
import About from './About'

const Home = () => {
    const btnTest = () => {
        console.log("link to Event page")
    }

    return (
        <div>
            <div className="actionImage"></div>

            <div className="contentWrap">

                <h2 className="homeQuote">“I like to step out of the box and be as creative as possible, put things together that people don’t think they would hear together.” <span className="homeQuoteSignoff">- DJ Bentley</span></h2>


                <Carousel />

                <About />

                <Link to="/event"><Button btnContent="Want to Book an event?" btnAction = {btnTest} /></Link>

            </div>
        </div>
    )
}

export default Home