import React from "react"
import { Link } from 'react-router-dom';

export default function GalleryImage() {

    return (
        <div className="galleryImage">

            <h1 className="galleryH1">View Gallery</h1>

            <img className="backgroundImage" src="../images/galleryImage.jpeg"></img>
        </div>
    )
}