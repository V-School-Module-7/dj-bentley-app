import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import {UserContext} from '../context/userProvider'
import { HashLink } from 'react-router-hash-link';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'

const Header = () => {
    const { token, logout } = useContext(UserContext)
    const [openDrop, setOpenDrop] = useState(false)

    const drop = () => {
        const dropDiv = document.getElementById("drop")
        dropDiv.classList.toggle("hidden")

        setOpenDrop(!openDrop)
    }

    return (
        <header>
            <Link to="/"><h3>DJ Bentley</h3></Link>
            <nav>
                <Link to="/">Home</Link>

                {
                    openDrop === false
                    ?
                    <FaCaretDown className="dropdownArrow" onClick={drop} /> 
                    :
                    <FaCaretUp className="dropdownArrow" onClick={drop} />
                }

                

                <div id="drop" className="hidden">
                    <HashLink to="/#mixes" onClick={drop}>Mixes</HashLink>
                    <HashLink to="/#about" onClick={drop}>About Me</HashLink>
                    <HashLink to="/#instagram" onClick={drop}>Instagram</HashLink>
                    <HashLink to="/#performed" onClick={drop}>Performed Along</HashLink>
                </div>
                
                <Link to="/event">Book Event</Link>
                { token && <Link onClick={logout}>Logout</Link>}
            </nav>
        </header>
    )
}

export default Header

//keep semi-transparent or keep opaque?