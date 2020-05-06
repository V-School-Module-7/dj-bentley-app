import React from 'react'

const FellowDjs = () => {
    const artists = [
        {
            artistName: "Tiesto",
            key: 0
        },
        {
            artistName: "Kaskade",
            key: 1
        },
        {
            artistName: "Bone Thugs-n-Harmony",
            key: 2
        },
        {
            artistName: "Snoop Dogg",
            key: 3
        },
        {
            artistName: "KRS-One",
            key: 4
        },
        {
            artistName: "Naughty by Nature",
            key: 5
        },
        {
            artistName: "Z-Trip",
            key: 6
        },
        {
            artistName: "Morgan Page",
            key: 7
        },
        {
            artistName: "Carnage",
            key: 8
        },
        {
            artistName: "B.O.B",
            key: 9
        },
        {
            artistName: "Robin Thicke",
            key: 10
        },
        {
            artistName: "Pat Benatar",
            key: 11
        },
        {
            artistName: "Cyndi Lauper",
            key: 12
        },
        {
            artistName: "Joan Jett",
            key: 13
        },
        {
            artistName: "Heart",
            key: 14
        },
        {
            artistName: "Salt-n-Pepa",
            key: 15
        },
        {
            artistName: "Waka Flocka",
            key: 16
        },
        {
            artistName: "Mickey Avalon",
            key: 17
        },
        {
            artistName: "Shwayze",
            key: 18
        },
        {
            artistName: "Clinton Sparks",
            key: 19
        },
        {
            artistName: "Lil Jon",
            key: 20
        },
        {
            artistName: "DJ R.O.B.",
            key: 21
        },
        {
            artistName: "DJ Mom Jeans",
            key: 22
        },
        {
            artistName: "DJ Spider",
            key: 23
        },
        {
            artistName: "DJ Fashen",
            key: 24
        },
        {
            artistName: "Graham Funke",
            key: 25
        },
        {
            artistName: "Stonerokk",
            key: 26
        },
        {
            artistName: "Samantha Ronson",
            key: 27
        },
        {
            artistName: "DJ Politk",
            key: 28
        },
        {
            artistName: "DJ Reach",
            key: 29
        },
        {
            artistName: "Thee Mike B",
            key: 30
        },
        {
            artistName: "DJ Scene",
            key: 31
        },
        {
            artistName: "DJ Skeet Skeet",
            key: 32
        },
        {
            artistName: "DJ Morse Code",
            key: 33
        },
        {
            artistName: "DJ Crooked",
            key: 34
        },
        {
            artistName: "DJ Skratchy",
            key: 35
        },
        {
            artistName: "Manufactured Superstars",
            key: 36
        },
        {
            artistName: "OB-One",
            key: 37
        },
        {
            artistName: "Ravi Drums",
            key: 38
        }
    ]

    return (
        <div className="fellowDjsPage">
            <div>
                <section></section>
                <h2>Featured Artists</h2>
                <section></section>
            </div>
            
            <div className="fellowDjs">
                    { artists.map((dj) => <p key={dj.key}>{dj.artistName}</p>)}
            </div>
        </div>
    )
}

export default FellowDjs