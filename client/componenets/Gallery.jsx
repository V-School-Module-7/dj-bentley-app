import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom';
import Photo from "./Photo";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import ClickOutside from "./ClickOutside";

export default function Gallery() {

    const photosArr = [
        "../images/gallery/Copy of Moet-Hennessy-3-11-9143.jpg", "../images/gallery/DBBA205D-BC33-4022-AC5D-45AE80FC6BC6.JPG", "../images/gallery/Dj-Bentley-Taylor-8.jpg", "/images/gallery/DSC03286.jpg", "/images/gallery/F7B2E57D-BE4F-45B2-9DD0-EF98A062A8A8.JPG", "/images/gallery/Header_Bio Photo.JPG", "/images/gallery/IMG_2786.jpg", "/images/gallery/IMG_5909.JPG", "/images/gallery/IMG_6271 2.JPG", "/images/gallery/Moet-Hennessy-3-11-9145.jpg", "/images/gallery/Moet-Hennessy-3-18-9135.jpg", "/images/gallery/Photo Feb 01, 2 51 14 AM.jpg", "/images/gallery/Photo Feb 01, 2 51 21 AM.jpg", "/images/gallery/Screenshot 2023-12-19 at 8.17.44 PM.png", "/images/gallery/unnamed (1).jpg", "/images/gallery/unnamed.jpg"
    ]

    const [showCarousel, setShowCarousel] = useState(false)
    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handlePhotoClick = async (index) => {
        await setSelectedPhotoIndex(index)
        setShowCarousel(prevShow => !prevShow)
    }

    const closeCarousel = () => {
        // setShowCarousel(false)
        setSelectedPhotoIndex(null)
        console.log("carousel closed")
    }


    const CustomPrevArrow = ({ onClick }) => (
        <div className="custom-prev" onClick={onClick}>
            <FontAwesomeIcon icon={faChevronLeft} />
        </div>
    );

    const CustomNextArrow = ({ onClick }) => (
        <div className="custom-next" onClick={onClick}>
            <FontAwesomeIcon icon={faChevronRight} />
        </div>
    );

    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: selectedPhotoIndex,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        fade: true,
        accessibility: true,

    };

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
                {photosArr.map((str, index) => (
                    <Photo className="squarePhoto" key={str} url={str} handleClick={() => handlePhotoClick(index)} />
                ))}

            </div>
            {showCarousel &&
                <ClickOutside onClick={closeCarousel} className="carouselContainer">

                    <Slider style={{ display: 'flex', alignItems: 'center', justifyContent: "center", maxWidth: '80vw', backgroundColor: "rgba(240, 239, 238, 0.90)", padding: "5vh 0 5vh 0" }} {...settings}>
                        {photosArr.map((str, index) => (
                            <Photo className="carouselPhoto" key={index} url={str} />
                        ))}
                    </Slider>
                </ClickOutside>

            }
        </>
    )
}