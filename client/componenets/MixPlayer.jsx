import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ReactPlayer from 'react-player'
// import IndMusic from './IndMusic'

const MixPlayer = () => {
    // const { dataState } = useContext(UserContext);
    const [mixes, setMixes] = useState([]);
    const [selectedMix, setSelectedMix] = useState(null);
    const [isClicked, setIsClicked] = useState(false);

    const iframeRef = useRef(null);

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

                setMixes(mixTiles)
                console.log(mixes);
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

    const handleMouseOver = () => {
        if (iframeRef.current) {
            console.log('moused over')
            iframeRef.current.contentWindow.postMessage({ method: 'play' }, '*');
        }
    };

    const handleMouseOut = () => {
        if (iframeRef.current) {
            console.log("moused out")
            // Pause the Mixcloud player when the iframe is not hovered
            iframeRef.current.contentWindow.postMessage({ method: 'pause' }, '*');
        }
    };
        
    

    return (
        
        <div className="musicPlayer">
            <script src="//widget.mixcloud.com/media/js/widgetApi.js" type="text/javascript"></script>
            <div>
                {mixes.map((mix, index) => (
                    <div
                        className="mix-box"
                        key={index}
                        onClick={() => handleMixClick(index)}
                    >
                        {selectedMix !== null && isClicked ? (
                            <iframe
                                width="30%"
                                height="400"
                                title={mixes[selectedMix].name}
                                src={`https://player-widget.mixcloud.com/widget/iframe/?light=1&feed=${encodeURIComponent(
                                    mix.url
                                )}`}
                                frameBorder="0"
                                onBlur={handleBlur}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            ></iframe>
                        ) : (
                            <div>
                                <h3>{mix.name}</h3>
                                <img src={mix.pictures} alt={mix.name} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MixPlayer;
