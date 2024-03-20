
import './style.css'
import homeImage from "../assets/homeImage.jpg"

export default function Home() {

    return (
        <div className="homeContainer">
            <img className="homeImage" src={homeImage} ></img>
        </div>
    );
}