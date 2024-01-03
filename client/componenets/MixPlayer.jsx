import React, { useState, useEffect } from "react";
import axios from "axios";
// import IndMusic from './IndMusic'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const MixPlayer = () => {
    // const { dataState } = useContext(UserContext);
    const [mixes, setMixes] = useState([]);
    const [selectedMix, setSelectedMix] = useState(null);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://api.mixcloud.com/djbentleytaylor/cloudcasts"
                );
                const data = response.data.data;
                console.log(data);
                const mixTiles = data.map((mix) => ({
                    name: mix.name,
                    url: mix.url,
                    pictures: mix.pictures && mix.pictures["320wx320h"],
                }));

                setMixes(mixTiles);
            } catch (error) {
                console.error("Error fetching Mixcloud data:", error);
            }
        };
        fetchData();
    }, []);

    const handleMixClick = (index) => {
        setSelectedMix(index);
        setIsClicked(true);
    };

    const handleBlur = () => {
        setIsClicked(false);
        setSelectedMix(null);
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
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  }

    return (
        <div className="musicPlayer">
            <h1>Bentley's Mixes</h1>
            {/* <FontAwesomeIcon icon={faChevronLeft} className = "chevronIcon"/> */}
            <div className = "carousel">
                <Slider {...settings}>

                {mixes.map((mix, index) => (
                    <div
                    className="mix-box"
                    key={index}
                    onClick={() => handleMixClick(index)}
                    >
                        {selectedMix !== null && isClicked ? (
                            <iframe
                            // width="100%"
                            // height="400"
                            title={mixes[selectedMix].name}
                            src={`https://player-widget.mixcloud.com/widget/iframe/?light=1&feed=${encodeURIComponent(
                                mix.url
                                )}`}
                                frameBorder="0"
                                onBlur={handleBlur}
                                ></iframe>
                                ) : (
                                    <div>
                                {/* not displaying the names for a cleaner mor minimal look */}
                                {/* <h3>{mix.name}</h3> */}
                                <img src={mix.pictures} alt={mix.name} />
                            </div>
                        )}
                    </div>
                ))}
                </Slider>
            </div>
            {/* <FontAwesomeIcon icon={faChevronRight} className = "chevronIcon" /> */}
        </div>
    );
};

export default MixPlayer;
