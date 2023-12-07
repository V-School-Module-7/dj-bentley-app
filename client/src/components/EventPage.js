import React, { useState } from "react";
import emailjs from "emailjs-com";
// import Calendar from 'react-calendar'

const EventPage = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_dpcvvfo",
                "template_cnpcy9m",
                e.target,
                "0FMSFkE2DIZ5zpkCX"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        alert(
            `Your request was sent, and I'll get back to you as soon as possible. Thanks!`
        );
    }

    return (
        <div className="eventPage">
            <form
                className="contact-form aboutContent bookContent"
                onSubmit={sendEmail}
            >
                <h1>BOOKING REQUEST</h1>
                

                <input type="text" name="user_name" placeholder="Name" />

                <input type="text" name="user_email" placeholder="Email" />

                <input
                    type="text"
                    name="venue_location"
                    placeholder="Venue Location"
                />

                <input type="date" placeholder="date" name="requested_date" />

                <input type="time" placeholder="Time" name="time" />

                <textarea name="message" placeholder="Your Message" />

                <input type="submit" value="Send" className="btn" />
            </form>

            <div className="bookImage"></div>
        </div>
    );
};

export default EventPage;
