import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaMixcloud, FaFacebookF, FaTwitter } from 'react-icons/fa'

const Header = (props) => {
    return (
        <header>
            <nav>
                    {
                        props.locPath === "/"
                        ?
                        <div>
                            <p onClick={props.openAboutModal}>About Me</p>
                            <p onClick={props.openBookModal}>Booking</p>
                        </div>
                        : <div>
                            <Link to="/">Home</Link>
                        </div>
                    }

                <div>
                    <a href="https://www.instagram.com/djbentleytaylor/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="https://www.facebook.com/DjBentleySLC/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                    <a href="https://twitter.com/djbentleytaylor" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href="https://www.mixcloud.com/djbentleytaylor/" target="_blank" rel="noopener noreferrer"><FaMixcloud /></a>
                </div>
            </nav>
        </header>
    )
}

export default Header