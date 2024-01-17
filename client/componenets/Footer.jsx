import { FaInstagram } from "react-icons/fa";
import mixCloudIcon from '../assets/mixcloud.svg';
import theKnotLogo from '../assets/the-knot-logo-vector.svg'

const Footer = () => {
 
return (
<div className="footer-container" style={{background: 'gray', display: 'flex', justifyContent:'space-around'}}>
    <FaInstagram style={{fontSize:'100px'}}/>
    <img src={theKnotLogo} width={100}/>
    <img src={mixCloudIcon} width={100}/>
</div>
)
}
 
export default Footer