import React from 'react'
import Button from './Button'

const Home = () => {
    const btnTest = () => {
        alert("hi btn alert")
    }

    return (
        <div className="contentWrap">
            <h1>
                home page
            </h1>

            <Button btnContent="hi button" btnAction = {btnTest} />
        </div>
    )
}

export default Home