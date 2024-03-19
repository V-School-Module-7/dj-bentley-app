import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import FormModal from "./FormModal";
import DatePicker from "react-datepicker";

const BookingForm = () => {
    const initInputs = {
        first_name: "",
        last_name: "",
        user_email: "",
        event_type: "",
        requested_date: "",
        event_location: "",
        event_duration: "",
        estimated_budget: "",
        how: "",
        details: "",
    };

    const [inputs, setInputs] = useState(initInputs);

    const [requiredFieldError, setRequiredFieldError] = useState("");
    const isDisabled = !(
        inputs.first_name &&
        inputs.last_name &&
        inputs.user_email
    );
    const hasError = !(
        inputs.first_name &&
        inputs.last_name &&
        inputs.user_email
    );
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        console.log("showModal updated:", showModal);
    }, [showModal]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
    };

    const handleDateChange = (date) => {
        setInputs((prevInputs) => ({ ...prevInputs, requested_date: date }));
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;

        if (name === "first_name" && value === "") {
            setRequiredFieldError("First Name is a required field.");
        } else if (name === "last_name" && value === "") {
            setRequiredFieldError("Last Name is a required field.");
        } else if (name === "user_email" && value === "") {
            setRequiredFieldError("Email address is a required field.");
        } else if (name === "event_type" && value === "") {
            setRequiredFieldError("Event type is a required field.");
        } else if (name === "event_date" && value === "") {
            setRequiredFieldError("Event date is a required field.");
        } else if (name === "how" && value === "") {
            setRequiredFieldError("How did you hear about DJ Bentley is a required field.");
        
        
        } else {
            setRequiredFieldError("");
        }
    };

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

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
                    handleOpenModal();
                },
                (error) => {
                    console.log(error.text);
                }
            );

        handleOpenModal();
        console.log(showModal);

        console.log("submitted form!");
        setInputs({
            first_name: "",
            last_name: "",
            user_email: "",
            event_type: "",
            requested_date: "",
            event_location: "",
            event_duration: "",
            estimated_budget: "",
            how: "",
            details: "",
        });
    }

    console.log(hasError);
    console.log(inputs);

    return (
        <div className="eventPage">
            <form className="bookContent" onSubmit={sendEmail}>
                
               
               <p className="required-field">* Required field</p>
                <div className="name-input">
                    <input
                        className="first-name-input"
                        type="text"
                        name="first_name"
                        placeholder="First Name *"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <input
                        className="last-name-input"
                        type="text"
                        name="last_name"
                        placeholder="Last Name *"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>

                <input
                    className="input"
                    type="text"
                    name="user_email"
                    placeholder="Email *"
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <select
                    className="input"
                    name="event_type"
                    onChange={handleChange}
                   
                >
                    <option value="">--Event Type *--</option>

                    <option value="wedding">Wedding</option>
                    <option value="corporate event">Corporate event</option>
                    <option value="private party">Private party</option>
                    <option value="other">Other</option>
                </select>
                <DatePicker
                    className="input"
                    name="requested_date"
                    selected={inputs.requested_date}
                    onChange={handleDateChange}
                    placeholderText="Event Date *"
                />

                <input
                    className="input"
                    type="text"
                    name="event_location"
                    placeholder="Event Location"
                    onChange={handleChange}
                    onBlur={handleBlur}
                />

                <input
                    className="input"
                    type="text"
                    name="event_duration"
                    placeholder="Event Duration"
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <input
                    className="input"
                    type="text"
                    name="estimated_budget"
                    placeholder="Estimated Budget"
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <select
                    className="input"
                    name="how"
                    onChange={handleChange}
                    onBlur={handleBlur}
                >
                    <option value="">
                        -- How did you hear about DJ Bentley? * --
                    </option>
                    <option value="The Knot/Wedding Wire">
                        The Knot/Wedding Wire
                    </option>
                    <option value="social media">Social Media</option>
                    <option value="referral">Referral</option>
                    <option value="attended prior event">
                        Attended Prior Event
                    </option>
                    <option value="other">Other</option>
                </select>
                <textarea
                    className="input"
                    name="details"
                    placeholder="Additional Event Details"
                    onChange={handleChange}
                    onBlur={handleBlur}
                />

                {hasError && (
                    <div className="validation-error">
                        <h3>
                            {requiredFieldError}
                        </h3>
                    </div>
                )}
                <button type="submit" className="btn" disabled={isDisabled}>
                    Submit
                </button>
            </form>
            <FormModal
                show={showModal}
                handleClose={handleCloseModal}
                setShowModal={setShowModal}
            ></FormModal>
        </div>
    );
};

export default BookingForm;
