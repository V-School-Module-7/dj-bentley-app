import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <h1>footer</h1>
            <Link to="/login">Admin</Link>
        </footer>
    )
}

export default Footer