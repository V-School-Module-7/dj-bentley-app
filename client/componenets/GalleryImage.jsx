import React from "react"
import { Link } from 'react-router-dom';
import galleryPhoto from "../assets/galleryPhoto.jpeg"

export default function GalleryImage() {

    return (
        <div className="galleryImage">
            <Link to="/gallery" >
                <h1 className="galleryH1">View Gallery</h1>
            </Link>

            <img className="backgroundImage" src={galleryPhoto}></img>
        </div>
    )
}