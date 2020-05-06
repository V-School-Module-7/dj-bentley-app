import React, { useState, useEffect } from 'react'
import { FaCircle } from 'react-icons/fa'

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

    const [chosenArtists, setChosenArtists] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14])

    const createNewNumbers = () => {
        const nameHolder = []

        for (let i = 0; i < chosenArtists.length; i++) {
            if (chosenArtists[i] === chosenArtists.length - 1) {
                nameHolder.push(0)
            } else {
                nameHolder.push(chosenArtists[i] + 1)
            }
        }

        setChosenArtists(nameHolder)
        console.log(chosenArtists)

        document.getElementById('fellowDjs').classList.toggle('opacity')
        document.getElementById('fellowDjs').classList.toggle('undoOpacity')
    }
    
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         createNewNumbers()
    //     }, 5000);
    
    //     return () => {
    //         clearInterval(interval);
    //     };
    // });

    return (
        <div className="fellowDjsPage">
            <div className='fDjBanner'>
                <section className='fDjBannerOne'></section>
                <h2>Featured Artists</h2>
                <section className='fDjBannerTwo'></section>
            </div>
            
            <div className="fellowDjs undoOpacity" id='fellowDjs'>
                {/* <button onClick={createNewNumbers}>Change Names</button> */}
                    {/* { chosenArtists.map((dj) => <p key={artists[dj].key}>{artists[dj].artistName}</p>)} */}
                    
                    <p className='fDjName' key={artists[chosenArtists[0]].key}>{artists[chosenArtists[0]].artistName}</p>

                    <FaCircle />

                    <p className='fDjName' key={artists[chosenArtists[1]].key}>{artists[chosenArtists[1]].artistName}</p>

                    <p className='fDjNameAccent' key={artists[chosenArtists[2]].key}>{artists[chosenArtists[2]].artistName}</p>

                    <p className='fDjName' key={artists[chosenArtists[3]].key}>{artists[chosenArtists[3]].artistName}</p>

                    <FaCircle />

                    <p className='fDjName' key={artists[chosenArtists[4]].key}>{artists[chosenArtists[4]].artistName}</p>
                    
                    <p className='fDjNameAccent' key={artists[chosenArtists[5]].key}>{artists[chosenArtists[5]].artistName}</p>

                    <p className='fDjName' key={artists[chosenArtists[6]].key}>{artists[chosenArtists[6]].artistName}</p>

                    <FaCircle />

                    <p className='fDjName' key={artists[chosenArtists[7]].key}>{artists[chosenArtists[7]].artistName}</p>

                    <p className='fDjNameAccent' key={artists[chosenArtists[8]].key}>{artists[chosenArtists[8]].artistName}</p>

                    <p className='fDjName' key={artists[chosenArtists[9]].key}>{artists[chosenArtists[9]].artistName}</p>

                    <FaCircle />
                    
                    <p className='fDjName' key={artists[chosenArtists[10]].key}>{artists[chosenArtists[10]].artistName}</p>

                    {/* <p key={artists[chosenArtists[11]].key}>{artists[chosenArtists[11]].artistName}</p>

                    <p key={artists[chosenArtists[12]].key}>{artists[chosenArtists[12]].artistName}</p>

                    <p key={artists[chosenArtists[13]].key}>{artists[chosenArtists[13]].artistName}</p>

                    <p key={artists[chosenArtists[14]].key}>{artists[chosenArtists[14]].artistName}</p> */}
                    
            </div>
        </div>
    )
}

export default FellowDjs