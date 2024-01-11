import React, { useState } from "react";
import emailjs from "@emailjs/browser";
// import Calendar from 'react-calendar'

const BookingForm = () => {
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
                <h1>BOOKING INQUIRIES</h1>
                <select name="how">
                    <option value="">
                        -- How did you hear about DJ Bentley? --
                    </option>
                    <option value="google">Google</option>
                    <option value="social_media">Social media</option>
                    <option value="friend">
                        Recommended by friend or colleague
                    </option>
                    <option value="attended_prior_event">
                        Attended prior event
                    </option>
                    <option value="blog">Blog or other publication</option>
                    <option value="other">Other</option>
                </select>

                <input type="text" name="user_name" placeholder="Name" />

                <input type="text" name="user_email" placeholder="Email" />

                <input
                    type="text"
                    name="event_location"
                    placeholder="Event Location"
                />
                <input type="text" name="city" placeholder="City" />
                <select name="state">
                    <option value="">-- State --</option>
                    <option value="AL">AL</option>
                    <option value="AK">AK</option>
                    <option value="AZ">AZ</option>
                    <option value="AR">AR</option>
                    <option value="CA">CA</option>
                    <option value="CO">CO</option>
                    <option value="CT">CT</option>
                    <option value="DE">DE</option>
                    <option value="FL">FL</option>
                    <option value="GA">GA</option>
                    <option value="HI">HI</option>
                    <option value="ID">ID</option>
                    <option value="IL">IL</option>
                    <option value="IN">IN</option>
                    <option value="IA">IA</option>
                    <option value="KS">KS</option>
                    <option value="KY">KY</option>
                    <option value="LA">LA</option>
                    <option value="ME">ME</option>
                    <option value="MD">MD</option>
                    <option value="MA">MA</option>
                    <option value="MI">MI</option>
                    <option value="MN">MN</option>
                    <option value="MS">MS</option>
                    <option value="MO">MO</option>
                    <option value="MT">MT</option>
                    <option value="NE">NE</option>
                    <option value="NV">NV</option>
                    <option value="NH">NH</option>
                    <option value="NJ">NJ</option>
                    <option value="NM">NM</option>
                    <option value="NY">NY</option>
                    <option value="NC">NC</option>
                    <option value="ND">ND</option>
                    <option value="OH">OH</option>
                    <option value="OK">OK</option>
                    <option value="OR">OR</option>
                    <option value="PA">PA</option>
                    <option value="RI">RI</option>
                    <option value="SC">SC</option>
                    <option value="SD">SD</option>
                    <option value="TN">TN</option>
                    <option value="TX">TX</option>
                    <option value="UT">UT</option>
                    <option value="VT">VT</option>
                    <option value="VA">VA</option>
                    <option value="WA">WA</option>
                    <option value="WV">WV</option>
                    <option value="WI">WI</option>
                    <option value="WY">WY</option>
                </select>
                <select name="event_type">
                    <option value="">--Event Type--</option>
                    <option value="corporate">Corporate event</option>
                    <option value="party">Private party</option>
                    <option value="wedding">Wedding</option>
                    <option value="club">Club event</option>
                    <option value="nonprofit">Non-profit event</option>
                </select>

                <input type="date" placeholder="date" name="requested_date" />

                <textarea name="details" placeholder="Additional Details" />

                <input type="submit" value="Submit" className="btn" />
            </form>

            <div className="bookImage"></div>
        </div>
    );
};

export default BookingForm;