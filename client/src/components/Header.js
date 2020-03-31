import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import {UserContext} from '../context/userProvider'

const Header = () => {
    const { token, logout } = useContext(UserContext)
    return (
        <header>
            <Link to="/"><h3>DJ Bentley</h3></Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/event">Events</Link>
                { token && <Link onClick={logout}>Logout</Link>}
            </nav>
        </header>
    )
}

export default Header

//keep semi-transparent or keep opaque?