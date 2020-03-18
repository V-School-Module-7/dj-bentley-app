import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <h3>bentley logo</h3>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/event">Events</Link>
            </nav>
        </header>
    )
}

export default Header

//keep semi-transparent or keep opaque?