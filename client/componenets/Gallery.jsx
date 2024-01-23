import React from "react"
import { Link } from 'react-router-dom';
import Photo from "./Photo";

export default function Gallery() {

    const photosArr = [
        "#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff", "#ff8000", "#8000ff",
        "#ff0080", "#80ff00", "#0080ff", "#ff4000", "#4000ff", "#ff0040", "#40ff00", "#0040ff",
        "#ffbf00", "#bf00ff", "#ff00bf", "#ff6000", "#6000ff", "#ff0060", "#60ff00", "#0060ff",
        "#ffaa00", "#aa00ff", "#ff00aa", "#ff2000", "#2000ff", "#ff0020", "#20ff00", "#0020ff",
        "#ffdd00", "#dd00ff", "#ff00dd", "#ff4c00", "#4c00ff", "#ff004c", "#4cff00", "#004cff",
        "#ffcc00", "#cc00ff", "#ff00cc", "#ffaa00", "#aa00ff", "#ff00aa", "#ffa500", "#a500ff",
        "#ff00a5", "#ff9100", "#9100ff", "#ff0091", "#91ff00", "#0091ff", "#ff6b00", "#6b00ff",
        "#ff006b", "#ff7500", "#7500ff", "#ff0075", "#75ff00", "#0075ff", "#ff8c00", "#8c00ff",
        "#ff008c", "#ff5500", "#5500ff", "#ff0055", "#55ff00", "#0055ff", "#ff9900", "#9900ff",
        "#ff0099", "#ff4500", "#4500ff", "#ff0045", "#45ff00", "#0045ff", "#ffbd00", "#bd00ff",
        "#ff00bd", "#ff5100", "#5100ff", "#ff0051", "#51ff00", "#0051ff", "#ffaf00", "#af00ff",
        "#ff00af", "#ff3d00", "#3d00ff", "#ff003d", "#3dff00", "#003dff", "#ffd600", "#d600ff",
    ]

    return (
        <>
            <div className='galleryNavbar'>
                <nav className='galleryNav'>
                    <img src="images/NavBarLogo.png" className='logo' />
                    <div className="galleryNavItems">
                        <Link className="galleryLink" to="/">Back To Main Page</Link>
                    </div>
                </nav>
            </div>
            <div className="Gallery-Images">
                {photosArr.map(str => (
                    <Photo key={str} colorCode={str} />
                ))}
            </div>
        </>

    )
}