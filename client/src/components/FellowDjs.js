import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../context/userProvider'
import { FaCircle } from 'react-icons/fa'

const FellowDjs = (props) => {
    const { dataState } = useContext(UserContext)

    const [chosenArtists, setChosenArtists] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

    const createNewNumbers = () => {
        const nameHolder = []

        for (let i = 0; i < chosenArtists.length; i++) {
            if (chosenArtists[i] === dataState.fellowData.length - 1) {
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
                <h2>FEATURED ARTISTS</h2>
                <section className='fDjBannerTwo'></section>
            </div>
            
            <div className="fellowDjs undoOpacity" id='fellowDjs'>

                { dataState.fellowData.length >= 11 ?
                
                    <>
                    <p className='fDjName' key={dataState.fellowData[chosenArtists[0]]._id}>{dataState.fellowData[chosenArtists[0]].name}</p>
                    

                    <FaCircle />

                    <p className='fDjName' key={dataState.fellowData[chosenArtists[1]]._id}>{dataState.fellowData[chosenArtists[1]].name}</p>

                    <p className='fDjNameAccent' key={dataState.fellowData[chosenArtists[2]]._id}>{dataState.fellowData[chosenArtists[2]].name}</p>

                    <p className='fDjName' key={dataState.fellowData[chosenArtists[3]]._id}>{dataState.fellowData[chosenArtists[3]].name}</p>

                    <FaCircle />

                    <p className='fDjName' key={dataState.fellowData[chosenArtists[4]]._id}>{dataState.fellowData[chosenArtists[4]].name}</p>
                    
                    <p className='fDjNameAccent' key={dataState.fellowData[chosenArtists[5]]._id}>{dataState.fellowData[chosenArtists[5]].name}</p>

                    <p className='fDjName' key={dataState.fellowData[chosenArtists[6]]._id}>{dataState.fellowData[chosenArtists[6]].name}</p>

                    <FaCircle />

                    <p className='fDjName' key={dataState.fellowData[chosenArtists[7]]._id}>{dataState.fellowData[chosenArtists[7]].name}</p>

                    <p className='fDjNameAccent' key={dataState.fellowData[chosenArtists[8]]._id}>{dataState.fellowData[chosenArtists[8]].name}</p>

                    <p className='fDjName' key={dataState.fellowData[chosenArtists[9]]._id}>{dataState.fellowData[chosenArtists[9]].name}</p>

                    <FaCircle />
                    
                    <p className='fDjName' key={dataState.fellowData[chosenArtists[10]]._id}>{dataState.fellowData[chosenArtists[10]].name}</p>
                    </>
                    : null }
                
            </div>
        </div>
    )
}

export default FellowDjs