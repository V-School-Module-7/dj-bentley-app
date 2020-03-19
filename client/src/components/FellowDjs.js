import React, { useState } from 'react'

const FellowDjs = () => {
    const artists = [
        {
            artistName: "Tiesto",
            artistInfo: "No additional info.",
            key: 0
        },
        {
            artistName: "Kaskade",
            artistInfo: "No additional info.",
            key: 1
        },
        {
            artistName: "Bone Thugs-n-Harmony",
            artistInfo: "No additional info.",
            key: 2
        },
        {
            artistName: "Snoop Dogg",
            artistInfo: "No additional info.",
            key: 3
        },
        {
            artistName: "KRS-One",
            artistInfo: "No additional info.",
            key: 4
        },
        {
            artistName: "Naughty by Nature",
            artistInfo: "No additional info.",
            key: 5
        },
        {
            artistName: "Z-Trip",
            artistInfo: "No additional info.",
            key: 6
        },
        {
            artistName: "Morgan Page",
            artistInfo: "No additional info.",
            key: 7
        },
        {
            artistName: "Carnage",
            artistInfo: "No additional info.",
            key: 8
        },
        {
            artistName: "B.O.B",
            artistInfo: "No additional info.",
            key: 9
        },
        {
            artistName: "Robin Thicke",
            artistInfo: "No additional info.",
            key: 10
        },
        {
            artistName: "Pat Benatar",
            artistInfo: "No additional info.",
            key: 11
        },
        {
            artistName: "Cyndi Lauper",
            artistInfo: "No additional info.",
            key: 12
        },
        {
            artistName: "Joan Jett",
            artistInfo: "No additional info.",
            key: 13
        },
        {
            artistName: "Heart",
            artistInfo: "No additional info.",
            key: 14
        },
        {
            artistName: "Salt-n-Pepa",
            artistInfo: "No additional info.",
            key: 15
        },
        {
            artistName: "Waka Flocka",
            artistInfo: "No additional info.",
            key: 16
        },
        {
            artistName: "Mickey Avalon",
            artistInfo: "No additional info.",
            key: 17
        },
        {
            artistName: "Shwayze",
            artistInfo: "No additional info.",
            key: 18
        },
        {
            artistName: "Clinton Sparks",
            artistInfo: "No additional info.",
            key: 19
        },
        {
            artistName: "Lil Jon",
            artistInfo: "No additional info.",
            key: 20
        },
        {
            artistName: "DJ R.O.B.",
            artistInfo: "No additional info.",
            key: 21
        },
        {
            artistName: "DJ Mom Jeans",
            artistInfo: "No additional info.",
            key: 22
        },
        {
            artistName: "DJ Spider",
            artistInfo: "No additional info.",
            key: 23
        },
        {
            artistName: "DJ Fashen",
            artistInfo: "No additional info.",
            key: 24
        },
        {
            artistName: "Graham Funke",
            artistInfo: "No additional info.",
            key: 25
        },
        {
            artistName: "Stonerokk",
            artistInfo: "No additional info.",
            key: 26
        },
        {
            artistName: "Samantha Ronson",
            artistInfo: "No additional info.",
            key: 27
        },
        {
            artistName: "DJ Politk",
            artistInfo: "No additional info.",
            key: 28
        },
        {
            artistName: "DJ Reach",
            artistInfo: "No additional info.",
            key: 29
        },
        {
            artistName: "Thee Mike B",
            artistInfo: "No additional info.",
            key: 30
        },
        {
            artistName: "DJ Scene",
            artistInfo: "No additional info.",
            key: 31
        },
        {
            artistName: "DJ Skeet Skeet",
            artistInfo: "No additional info.",
            key: 32
        },
        {
            artistName: "DJ Morse Code",
            artistInfo: "No additional info.",
            key: 33
        },
        {
            artistName: "DJ Crooked",
            artistInfo: "No additional info.",
            key: 34
        },
        {
            artistName: "DJ Skratchy",
            artistInfo: "No additional info.",
            key: 35
        },
        {
            artistName: "Manufactured Superstars",
            artistInfo: "No additional info.",
            key: 36
        },
        {
            artistName: "OB-One",
            artistInfo: "No additional info.",
            key: 37
        },
        {
            artistName: "Ravi Drums",
            artistInfo: "No additional info.",
            key: 38
        }
    ]

    const initArtist = artists[0]

    const [selectedArtist, setSelectedArtist] = useState(initArtist)

    

    return (
        <div className="fellowDjsPage">
            <h2>DJ Bentley has performed along side such artist as:</h2>
            <div className="fellowDjs">
                <div>
                    { artists.map((dj) => <h3 key={dj.key} onClick={() => setSelectedArtist(dj)}>{dj.artistName}</h3>)}
                </div>

                <div>
                    <h2>{ selectedArtist.artistName }</h2>
                    <p>{ selectedArtist.artistInfo}</p>
                </div>
            </div>
            
        </div>
    )
}

export default FellowDjs