import React, { useState } from 'react'

const MusicPlayer = () => {
    const initSong = "https://www.mixcloud.com/widget/iframe/?feed=%2Fdjbentleytaylor%2Fdj-bentley-top-40-dance-mix%2F"
    

    const [song, setSong] = useState(initSong)

    const handleSongChange = (song) => {
        setSong(song)
    }

    return (
        <div className="musicPlayer">
            
            <div>
                <iframe title="mixcloud player" width="100%" height="400" src={song} frameBorder="0" ></iframe>
            </div>

            <div className='musicList'>
                <div className="otherMusic" onClick={() => handleSongChange("https://www.mixcloud.com/widget/iframe/?feed=%2Fdjbentleytaylor%2Fdj-bentley-top-40-dance-mix%2F")}>
                    <img alt="DJ Bentley Top 40 Dance Mix" src="https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/d/6/3/1/3fd1-8887-446a-a0b7-ee924484feeb.jpg" />
                    <h3>DJ Bentley Top 40 Dance Mix</h3>
                </div>
                <div className="otherMusic" onClick={() => handleSongChange("https://www.mixcloud.com/widget/iframe/?feed=%2Fdjbentleytaylor%2Fdj-bentley-top-40-dance-mix%2F")}>
                    <img alt="DJ Bentley Top 40 Dance Mix" src="https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/d/6/3/1/3fd1-8887-446a-a0b7-ee924484feeb.jpg" />
                    <h3>DJ Bentley Top 40 Dance Mix</h3>
                </div>
                <div className="otherMusic" onClick={() => handleSongChange("https://www.mixcloud.com/widget/iframe/?feed=%2Fdjbentleytaylor%2Fdj-bentley-top-40-dance-mix%2F")}>
                    <img alt="DJ Bentley Top 40 Dance Mix" src="https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/d/6/3/1/3fd1-8887-446a-a0b7-ee924484feeb.jpg" />
                    <h3>DJ Bentley Top 40 Dance Mix</h3>
                </div>
            </div>
            </div>
    )
}

export default MusicPlayer