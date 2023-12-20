import React, { useState, useEffect } from "react";
import axios from "axios";

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
            </div>
        </div>
    );
};

export default About;