import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "https://widget.mixcloud.com/media/js/widgetApi.js";

const MixPlayer = () => {
    const [mixes, setMixes] = useState([]);
    const [isClicked, setIsClicked] = useState(false);
    const [selectedMixIndex, setSelectedMixIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://api.mixcloud.com/djbentleytaylor/cloudcasts"
                );
                const data = response.data.data;
                const mixTiles = data.map((mix) => ({
                    name: mix.name,
                    url: mix.url,
                    pictures: mix.pictures && mix.pictures["320wx320h"],
                }));

                setMixes(mixTiles);
                console.log(mixTiles);
            } catch (error) {
                console.error("Error fetching Mixcloud data:", error);
            }
        };
        fetchData();
    }, []);

    const handleMixClick = (index) => {
        window.onbeforeunload = () => undefined;
        setSelectedMixIndex(index);
        console.log(selectedMixIndex);
    };

    // slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="musicPlayer">
            <h1>Bentley's Mixes</h1>
            <div className="carousel">
                <Slider {...settings}>
                    {mixes.map((mix, index) => (
                        <div
                            className="mix-box"
                            key={index}
                            onClick={() => handleMixClick(index)}
                            // onBlur={handleBlur}
                        >
                            <div className="container">
                                <img
                                    id={`my-widget-image-${index}`}
                                    onClick={() => handleMixClick(index)}
                                    src={mix.pictures}
                                    alt={mix.name}
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
                <iframe
                    id={`my-widget-iframe`}
                    onClick={() => handleMixClick(index)}
                    sandbox="allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                    width="100%"
                    height="400"
                    title={mixes[selectedMixIndex]?.name}
                    src={`https://player-widget.mixcloud.com/widget/iframe/?light=1&feed=${encodeURIComponent(
                        mixes[selectedMixIndex]?.url || ""
                    )}`}
                    frameBorder="0"
                ></iframe>
            </div>
        </div>
    );
};

export default MixPlayer;
