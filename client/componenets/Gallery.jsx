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
        "../assets/Copy of Moet-Hennessy-3-11-9143.jpg", "../assets/DBBA205D-BC33-4022-AC5D-45AE80FC6BC6.JPG", "../assets/Dj-Bentley-Taylor-8.jpg", "../assets/DSC03286.jpg", "../assets/F7B2E57D-BE4F-45B2-9DD0-EF98A062A8A8.JPG", "../assets/Header_Bio Photo.JPG", "../assets/IMG_2786.jpg", "../assets/IMG_5909.JPG", "../assets/IMG_6271 2.JPG", "../assets/Moet-Hennessy-3-11-9145.jpg", "../assets/Moet-Hennessy-3-18-9135.jpg", "../assets/Photo Feb 01, 2 51 14 AM.jpg", "../assets/Photo Feb 01, 2 51 21 AM.jpg", "../assets/Screenshot 2023-12-19 at 8.17.44 PM.png", "../assets/unnamed (1).jpg", "../assets/unnamed.jpg"
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