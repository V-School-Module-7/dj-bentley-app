import React from 'react'
import Button from './Button'
import Carousel from './Carousel'

const Home = () => {
    const btnTest = () => {
        alert("link to Event page")
    }

    return (
        <div>
            <div className="actionImage">action image</div>

            <div className="contentWrap">

                <h1>info blurb</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque. Felis eget nunc lobortis mattis aliquam faucibus purus. Id semper risus in hendrerit gravida rutrum quisque non tellus. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Condimentum mattis pellentesque id nibh tortor. A pellentesque sit amet porttitor eget dolor morbi non. Varius quam quisque id diam vel quam.Dolor sit amet consectetur adipiscing elit pellentesque. Dolor sit amet consectetur adipiscing elit pellentesque. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Maecenas volutpat blandit aliquam etiam erat velit scelerisque.</p>

                <h1>carousel</h1>
                <Carousel />

                <Button btnContent="Want to Book an event?" btnAction = {btnTest} />

            </div>
        </div>
    )
}

export default Home