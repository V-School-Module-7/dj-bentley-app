import React from 'react'
import emailjs from 'emailjs-com'
import Calendar from 'react-calendar'

const EventPage = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm("gmail", "dj_bentley", e.target, "user_lcPxsoaMpJI5OFyliEpYn")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className="contentWrap">
            <h1>Booking</h1>
            <h3>
                Request to book me for an event with this form,
                and I will follow up with you via email. Please
                note that I am unavailable on calendar dates that
                have been blocked out.
            </h3>
            <form className="contact-form" onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="text" name="user_email" />
                <br />
                <label>Event Details & Location</label>
                <br />
                <textarea name="message" rows="20" cols="70" />
                <br />
                <input type="submit" value="Send" />
            </form>
            <div className="bookingCalendar">
                <Calendar />

            </div>
        </div>
    )
}

export default EventPage