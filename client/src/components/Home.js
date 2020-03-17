import React from 'react'
import Button from './Button'
import Carousel from './Carousel'
import About from './About'
// import from "../assets/ActionImage_DJBentley.jpg"

const Home = () => {
    const btnTest = () => {
        alert("link to Event page")
    }

    return (
        <div>
            <div className="actionImage"></div>

            <div className="contentWrap">

                <h2>“I like to step out of the box and be as creative as possible, put things together that people don’t think they would hear together.” - DJ Bentley</h2>


                <Carousel />

                <About />

                <Button btnContent="Want to Book an event?" btnAction = {btnTest} />

            </div>
        </div>
    )
}

export default Home