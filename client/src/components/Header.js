import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <Link to="/"><h3>DJ Bentley</h3></Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/event">Book Event</Link>
            </nav>
        </header>
    )
}

export default Header

//keep semi-transparent or keep opaque?