import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
// import IndMusic from './IndMusic'

const MixPlayer = () => {
    const iframeRef = useRef(null)
    // const { dataState } = useContext(UserContext);
    const [mixes, setMixes] = useState([]);
    const [selectedMix, setSelectedMix] = useState(null);
    const [isClicked, setIsClicked] = useState(false);
    const [isPlaying, setisPlaying] = useState(false)


        const handleFocus = () => {
            console.log('focused')
        }
 

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
        setisPlaying(true)
        console.log()
    };

    const handleBlur = (index) => {
        setIsClicked(false);
        setSelectedMix(null);
        setisPlaying(false)
        console.log("blurred")
    };

    return (
        <div className="musicPlayer">
            <div>
                {mixes.map((mix, index) => (
                    <div
                        className="mix-box"
                        key={index}
                        onClick={() => handleMixClick(index)}
                        onBlur={handleBlur}
                    >
                        {selectedMix !== null && isClicked ? (
                            <div
                                onBlur={handleBlur}>
                                <iframe
                                    width="30%"
                                    height="400"
                                    title={mixes[selectedMix].name}
                                    src={`https://player-widget.mixcloud.com/widget/iframe/?light=1&feed=${encodeURIComponent(
                                        mix.url
                                    )}`}
                                    frameBorder="0"
                                
                                ></iframe>
                            </div>
                        ) : (
                            <div
                                onBlur={handleBlur}>
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
