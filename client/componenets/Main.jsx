import React from 'react';
import MixPlayer from './MixPlayer.jsx'
import About from './About.jsx'
import Reviews from './Reviews.jsx';
import GalleryImage from './GalleryImage.jsx';
import Home from './Home.jsx'
import BookingForm from './BookingForm.jsx';

export default function Main() {
    return (

        <>
            <div id="home">
                <Home />
            </div>
            <div id="about" className="aboutContainer">
                <About />
            </div>
            <div className="booking">
                <div id="bookingForm">
                    <h1 className="bookH1">Book DJ Bentley</h1>
                    <BookingForm />
                    <div className="details">
                        <h2>Booking Details</h2>
                        <p>DJ Bentley is dedicated to transforming your events into lasting impressions for you and your guests! He will work closely with you to understand your vision, preferences, and any specific requests to create a personalized experience that exceeds expectations.</p>
                    </div>
                </div>
                <img src="/assets/bookingPhoto.png" className="bookingImage"></img>
            </div>
            <div id="reviews" className="reviewsComponent">
                <Reviews />
            </div>
            <div id="mixPlayer">
                <MixPlayer />
            </div>
            <div id="galleryImage">
                <GalleryImage />
            </div>
        </>
    )
}