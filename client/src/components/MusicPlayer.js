import React, { useState, useContext } from 'react'
import IndMusic from './IndMusic'
import { UserContext } from '../context/userProvider'

const MusicPlayer = () => {
    const { dataState } = useContext(UserContext)

    const initSong = "https://www.mixcloud.com/widget/iframe/?feed=%2Fdjbentleytaylor%2Fdj-bentley-top-40-dance-mix%2F"
    

    const [song, setSong] = useState(initSong)

    const handleSongChange = (song) => {
        setSong(song)
    }

    const testData = [
        {
            url:'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/d/6/3/1/3fd1-8887-446a-a0b7-ee924484feeb.jpg',
            mixName: 'DJ Bentley Top 40 Dance Mix',
            key: 0
        },
        {
            url:'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/d/6/3/1/3fd1-8887-446a-a0b7-ee924484feeb.jpg',
            mixName: 'DJ Bentley Top 40 Dance Mix',
            key: 1
        }
    ]

    return (
        <div className="musicPlayer">
            
            <div>
                <iframe title="mixcloud player" width="100%" height="400" src={song} frameBorder="0" ></iframe>
            </div>

            <div className='musicList'>
                { dataState.mixData.map((ind) => <IndMusic key={ind._id} {...ind} theKey={ind._id} handleSongChange={handleSongChange} />)}
            </div>
        </div>
    )
}

export default MusicPlayer