import React, { useState, useEffect } from "react";
import axios from "axios";
import './style.css'

const About = () => {
    const [bio, setBio] = useState("");

    useEffect(() => {
        axios
            .get("https://api.mixcloud.com/djbentleytaylor")
            .then((res) => {
                const data = res.data.biog;
                setBio(data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="aboutPage">
            <div className="aboutImage"></div>
            <div className="aboutContent">
                <h1>ABOUT ME</h1>
                <p>{bio}</p>
                <img className = "bioImage" src = "../images/bioPhoto.jpg" ></img>
            </div>
        </div>
    );
};

export default About;