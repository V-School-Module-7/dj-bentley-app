import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/userProvider'

const Footer = () => {
    const { token, logout } = useContext(UserContext)

    return (
        <footer>
            <Link to="/login">Admin</Link>
            {token && <Link onClick={logout}>Logout</Link>}
        </footer>
    )
}

export default Footer