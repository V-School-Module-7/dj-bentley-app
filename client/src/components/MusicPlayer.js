import React, { useState } from 'react'

const MusicPlayer = () => {
    const initSong = "https://www.mixcloud.com/widget/iframe/?feed=%2Fdjbentleytaylor%2Fsat-dec-14-mid-city-pub-grill-bentley-jello-live%2F"
    

    const [song, setSong] = useState(initSong)

    const handleSongChange = (song) => {
        setSong(song)
    }

    return (
        <div>
            <h1 className="headlineTwo">Mixes</h1>

        <div className="musicPlayer">
            
            <div>
                <iframe title="mixcloud player" width="100%" height="400" src={song} frameBorder="0" ></iframe>
            </div>

            <div>
                <div className="otherMusic" onClick={() => handleSongChange("https://www.mixcloud.com/widget/iframe/?feed=%2Fdjbentleytaylor%2Fsat-dec-14-mid-city-pub-grill-bentley-jello-live%2F")}>
                    <img alt="Sat. Dec. 14 Mid City Pub & Grill (Bentley & Jello Live)" src="https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/2/6/5/f/b053-23dd-4c8b-b74e-68a230fd5c7e" />
                    <h3>Sat. Dec. 14 Mid City Pub & Grill (Bentley & Jello Live)</h3>
                </div>
                <div className="otherMusic" onClick={() => handleSongChange("https://www.mixcloud.com/widget/iframe/?feed=%2Fdjbentleytaylor%2Fdj-bentley-top-40-dance-mix%2F")}>
                    <img alt="DJ Bentley Top 40 Dance Mix" src="https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/d/6/3/1/3fd1-8887-446a-a0b7-ee924484feeb.jpg" />
                    <h3>DJ Bentley Top 40 Dance Mix</h3>
                </div>
            </div>
            </div>
        </div>
    )
}

export default MusicPlayer