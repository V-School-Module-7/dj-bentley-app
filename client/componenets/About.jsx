import  { useState, useEffect } from "react";
import axios from "axios";
import './style.css'
import bioPhoto from "../assets/bioPhoto.jpeg";

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
            <div className="aboutImage">
                <img className="bioImage" src={bioPhoto} ></img>
            </div>
            <div className="aboutContent">
                <h1>Bio</h1>
                <p>{bio}</p>
            </div>
        </div>
    );
};

export default About;