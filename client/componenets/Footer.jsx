import { FaInstagram, FaMixcloud } from "react-icons/fa";
import theKnotLogo from '../assets/the-knot-logo-vector.svg'
import DJBENTLEY from "../assets/DJBENTLEY.png"

const Footer = () => {

    return (
        <div className="footer-container">
            <div className="footerItems">
                <a href="https://www.instagram.com/djbentleytaylor/" >
                    <FaInstagram />
                </a>
                <a href="https://www.theknot.com/marketplace/dj-bentley-park-city-ut-2064480" >
                    <img src={theKnotLogo} alt="The Knot" />
                </a>
                <a href="https://www.mixcloud.com/djbentleytaylor/" >
                    <FaMixcloud />
                </a>
            </div>
            <img className="footerLogo" src={DJBENTLEY} ></img>
        </div>
    )
}

export default Footer