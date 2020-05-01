import React from 'react'
import { Link } from 'react-router-dom'
// import {UserContext} from '../context/userProvider'
// import { HashLink } from 'react-router-hash-link';
// import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import { FaInstagram, FaMixcloud } from 'react-icons/fa'

const Header = (props) => {
    // const { token, logout } = useContext(UserContext)
    // const [openDrop, setOpenDrop] = useState(false)

    // const drop = () => {
    //     const dropDiv = document.getElementById("drop")
    //     dropDiv.classList.toggle("hidden")

    //     setOpenDrop(!openDrop)
    // }

    return (
        <header>
            <nav>
                {/* {
                    openDrop === false
                    ?
                    <FaCaretDown className="dropdownArrow" onClick={drop} /> 
                    :
                    <FaCaretUp className="dropdownArrow" onClick={drop} />
                }

                 */}

                {/* <div id="drop" className="hidden">
                    <HashLink to="/#mixes" onClick={drop}>Mixes</HashLink>
                    <HashLink to="/#about" onClick={drop}>About Me</HashLink>
                    <HashLink to="/#instagram" onClick={drop}>Instagram</HashLink>
                    <HashLink to="/#performed" onClick={drop}>Performed Along</HashLink>
                </div> */}
                    

                    {
                        props.locPath === "/"
                        ?
                        <div>
                            <Link to="/">Home</Link>

                            <button onClick={props.openAboutModal}>AboutModal</button>
                            <button onClick={props.openBookModal}>BookModal</button>

                            <Link to="/event">Book Event</Link>
                        </div>
                        : <div>
                            <Link to="/">Home</Link>
                            <Link to="/event">Book Event</Link>
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