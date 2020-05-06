import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaMixcloud } from 'react-icons/fa'

const Header = (props) => {
    return (
        <header>
            <nav>
                    {
                        props.locPath === "/"
                        ?
                        <div>
                            <p onClick={props.openAboutModal}>AboutModal</p>
                            <p onClick={props.openBookModal}>BookModal</p>
                        </div>
                        : <div>
                            <Link to="/">Home</Link>
                        </div>
                    }

                <div>
                    <a href="https://www.instagram.com/djbentleytaylor/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="https://www.mixcloud.com/djbentleytaylor/" target="_blank" rel="noopener noreferrer"><FaMixcloud /></a>
                </div>
                

                {/* { token && <Link onClick={logout}>Logout</Link>} */}
            </nav>
        </header>
    )
}

export default Header

//keep semi-transparent or keep opaque?