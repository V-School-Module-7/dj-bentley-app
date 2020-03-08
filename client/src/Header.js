import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <h3>logo</h3>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/event">Events</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            
        </header>
    )
}

export default Header