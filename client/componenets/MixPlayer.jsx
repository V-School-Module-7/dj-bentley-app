import React, { useState, useEffect } from "react";
import axios from "axios";
// import IndMusic from './IndMusic'

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
                // console.log(data);
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

    return (
        <div className="musicPlayer">
            <div>
                {mixes.map((mix, index) => (
                    <div
                        className="mix-box"
                        key={index}
                        onClick={() => handleMixClick(index)}
                    >
                        {selectedMix !== null && isClicked ? (
                            <iframe
                                width="100%"
                                height="400"
                                title={mixes[selectedMix].name}
                                src={`https://player-widget.mixcloud.com/widget/iframe/?light=1&feed=${encodeURIComponent(
                                    mix.url
                                )}`}
                                frameBorder="0"
                                onBlur={handleBlur}
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
