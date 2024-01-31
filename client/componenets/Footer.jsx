import { FaInstagram, FaMixcloud } from "react-icons/fa";
import mixCloudIcon from '../assets/mixcloud.svg';
import theKnotLogo from '../assets/the-knot-logo-vector.svg'

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
            <img className="footerLogo" src="../assets/DJBENTLEY.png" ></img>
        </div>
    )
}

export default Footer