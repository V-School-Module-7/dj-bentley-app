import React, { useState } from 'react'
import Header from './Header'
import ContentCard from './ContentCard'
// import About from './About'

// import Modal from 'react-modal'
// import { FaTimes } from 'react-icons/fa'

const Home = (props) => {
    const [cardState, setCardState] = useState({
        cardOne: 4,
        cardTwo: 3,
        cardThree: 2,
        cardFour: 1
    })

    const nextCard = () => {
        if (cardState.cardOne === 4) {
            setCardState(prevCard=> ({
                ...prevCard,
                cardOne: 3,
                cardTwo: 4
            }))
        } else if (cardState.cardTwo === 4) {
            setCardState(prevCard=> ({
                ...prevCard,
                cardOne: 3,
                cardTwo: 2,
                cardThree: 4
            }))
        } else if (cardState.cardThree === 4) {
            setCardState(prevCard=> ({
                ...prevCard,
                cardOne: 3,
                cardTwo: 2,
                cardThree: 1,
                cardFour: 4
            }))
        } else if (cardState.cardFour === 4) {
            setCardState({
                cardOne: 4,
                cardTwo: 3,
                cardThree: 2,
                cardFour: 1
            })
        }
    }

    const backCard = () => {
        if (cardState.cardOne === 4) {
            setCardState({
                cardOne: 3,
                cardTwo: 2,
                cardThree: 1,
                cardFour: 4
            })
        } else if (cardState.cardTwo === 4) {
            setCardState({
                cardOne: 4,
                cardTwo: 3,
                cardThree: 2,
                cardFour: 1
            })
        } else if (cardState.cardThree === 4) {
            setCardState({
                cardOne: 3,
                cardTwo: 4,
                cardThree: 2,
                cardFour: 1
            })
        } else if (cardState.cardFour === 4) {
            setCardState({
                cardOne: 3,
                cardTwo: 2,
                cardThree: 4,
                cardFour: 1
            })
        }
    }

    // const aboutModalStyles = {
    //     overlay: {
    //         zIndex: 20,
    //         margin: '20px',
    //         backgroundColor: 'none'
    //     },
    //     content: {
    //         background: 'gray'
    //     }
    // }

    return (
        <div>
            <div className="headerImg">
                <div className='overlayone'></div>
                <div className='arrow-up overlaytwo'></div>
                <div className="arrow-down overlaythree"></div>
            </div>
            <Header openAboutModal={props.openAboutModal} openBookModal={props.openBookModal} locPath={props.locPath} />

            <div className='cards'> 
                <button onClick={backCard}>back</button>
                <button onClick={nextCard}>next</button>
                <ContentCard cardIndex='cardOne' z={cardState.cardOne} />
                <ContentCard cardIndex='cardTwo' z={cardState.cardTwo} />
                <ContentCard z={cardState.cardThree} cardIndex='cardThree' />
                <ContentCard cardIndex='cardFour' z={cardState.cardFour} />
            </div>
        </div>
    )
}

export default Home