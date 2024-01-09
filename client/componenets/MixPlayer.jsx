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
    const [selectedMixIndex, setSelectedMixIndex] = useState(null);
    const [iframeLoaded, setIframeLoaded] = useState(false);
    const [widgets, setWidgets] = useState({});

    useEffect(() => {
        console.log(window.Mixcloud);
    }, []);

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

    useEffect(() => {
        setIframeLoaded(true);
        console.log('iframe loaded!')
    }, []);

    const handleMixClick = (index) => {
        setSelectedMixIndex(index);
        setIsClicked(true);
        handleWidgetPlayEvent();
        const iframeId = `my-widget-iframe-${index}`;
        const widget = window.Mixcloud.PlayerWidget(
            document.getElementById(iframeId)
        );
        const pauseListener = () => {
            console.log("Widget paused!");

            // setWidgets((prevWidgets) => ({ ...prevWidgets, [index]: widget }));

            // widget.ready.then(() => {
            //     widget.events.play.on(() => console.log("It played!"));
            // });
        };
    };

    // const handleBlur = () => {
    //     setIsClicked(false);
    // };

    const handleWidgetLoaded = () => {
        setIframeLoaded(true);
    };

    //will need to call the widget.events.play function on the widget that's clicked
    //the widget that's clicked will need to be saved as a variable

    const handleWidgetPlayEvent = (index) => {
        // let widget;
        // for (let id in widgets) {
        //     widget = widgets[id];
        //     widget.getIsPaused().then((isPaused) => {
        //         if (isPaused) {
        //             console.log(`Pausing widget ${id}`);
        //             // widget.pause()
        //         } else {
        //             console.log(`played widget ${id}`);
        //         }
        //     });
        // }
        if (iframeLoaded) {
            const iframeId = `my-widget-iframe-${index}`;
            const widget = window.Mixcloud.PlayerWidget(
                document.getElementById(iframeId)
            );

            widget.ready.then(() => {
                widget.events.play.on(() => console.log("It played!"));
            });
        }
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
                            <div>
                                
                                    <iframe
                                        id={`my-widget-iframe-${index}`}
                                        onLoad={() => handleWidgetLoaded(index)}
                                        width="30%"
                                        height="400"
                                        title={mix.name}
                                        src={`https://player-widget.mixcloud.com/widget/iframe/?light=1&feed=${encodeURIComponent(
                                            mix.url
                                        )}`}
                                        frameBorder="0"
                                        className="dynamicClass"
                                    ></iframe>
                                
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default MixPlayer;