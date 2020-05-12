import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../context/userProvider'
import { FaCircle } from 'react-icons/fa'

const FellowDjs = (props) => {
    const { dataState } = useContext(UserContext)

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
    
    useEffect(() => {
        const interval = setInterval(() => {
            createNewNumbers()
        }, 5000);
    
        return () => {
            clearInterval(interval);
        };
    });

    return (
        <div className="fellowDjsPage">
            <div className='fDjBanner'>
                <section className='fDjBannerOne'></section>
                <h2>Featured Artists</h2>
                <section className='fDjBannerTwo'></section>
            </div>
            
            <div className="fellowDjs undoOpacity" id='fellowDjs'>

                {/* { dataState.fellowData.length >= 11 ? */}
                
                    <>
                    <p className='fDjName' key={props.artists[chosenArtists[0]].key}>{props.artists[chosenArtists[0]].artistName}</p>
                    

                    <FaCircle />

                    <p className='fDjName' key={props.artists[chosenArtists[1]].key}>{props.artists[chosenArtists[1]].artistName}</p>

                    <p className='fDjNameAccent' key={props.artists[chosenArtists[2]].key}>{props.artists[chosenArtists[2]].artistName}</p>

                    <p className='fDjName' key={props.artists[chosenArtists[3]].key}>{props.artists[chosenArtists[3]].artistName}</p>

                    <FaCircle />

                    <p className='fDjName' key={props.artists[chosenArtists[4]].key}>{props.artists[chosenArtists[4]].artistName}</p>
                    
                    <p className='fDjNameAccent' key={props.artists[chosenArtists[5]].key}>{props.artists[chosenArtists[5]].artistName}</p>

                    <p className='fDjName' key={props.artists[chosenArtists[6]].key}>{props.artists[chosenArtists[6]].artistName}</p>

                    <FaCircle />

                    <p className='fDjName' key={props.artists[chosenArtists[7]].key}>{props.artists[chosenArtists[7]].artistName}</p>

                    <p className='fDjNameAccent' key={props.artists[chosenArtists[8]].key}>{props.artists[chosenArtists[8]].artistName}</p>

                    <p className='fDjName' key={props.artists[chosenArtists[9]].key}>{props.artists[chosenArtists[9]].artistName}</p>

                    <FaCircle />
                    
                    <p className='fDjName' key={props.artists[chosenArtists[10]].key}>{props.artists[chosenArtists[10]].artistName}</p>
                    </>
                    {/* : null } */}
                
            </div>
        </div>
    )
}

export default FellowDjs