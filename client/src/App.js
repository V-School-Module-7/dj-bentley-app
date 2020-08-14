import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom'
import './style/style.css'
import EventPage from './components/EventPage'
import Login from './components/Login'
import Footer from './components/Footer'

import Home from './components/Home'
import Modal from 'react-modal'
import { FaTimes } from 'react-icons/fa'
import About from './components/About'


function App() {

	const [aboutModalIsOpen, setAboutModalIsOpen] = useState(false)

    const openAboutModal = () => {
        setAboutModalIsOpen(true)
    }

    const closeAboutModal = () => {
        setAboutModalIsOpen(false)
	}

	const [bookModalIsOpen, setBookModalIsOpen] = useState(false)

    const openBookModal = () => {
        setBookModalIsOpen(true)
    }

    const closeBookModal = () => {
        setBookModalIsOpen(false)
	}

	const aboutModalStyles = {
        overlay: {
            zIndex: 20,
            margin: '0px',
            backgroundColor: 'none'
        },
        content: {
			background: '#F2EFE9',
			margin: '-25px',
			padding: 0,
			color: '#25282A',
			border: 'none',
			borderRadius: '3px',
			boxShadow: 'black 5px 3px 8px',
			button: {
				color: 'black'
			}
        }
    }
	const bookModalStyles = {
        overlay: {
            zIndex: 20,
            margin: '0px',
			backgroundColor: 'none'
        },
        content: {
			background: '#AE5E15',
			margin: '-25px',
			padding: 0,
			border: 'none',
			borderRadius: '3px',
			boxShadow: 'black 5px 3px 8px'
        }
	}
	
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
    	<div className="pageContainer">

		<Switch>
			<Route exact path="/"
				render={(props) => <Home artists={artists} locPath={props.location.pathname} openAboutModal={openAboutModal}
				openBookModal={openBookModal} />} />
			<Route path="/event"><EventPage /></Route>
			<Route path="/login"><Login /></Route>
            {/* <Route path="/gallery"></Route> */}
    	</Switch>

		<Modal
			isOpen={aboutModalIsOpen}
			onRequestClose={closeAboutModal}
			contentLabel="About Modal"
			style={aboutModalStyles}
		>
			<h3 onClick={closeAboutModal} className="svgRight"><FaTimes style={{color: 'black', float:'right', margin: '10px'}} /></h3>
			<About  />
		</Modal>

		<Modal
			isOpen={bookModalIsOpen}
			onRequestClose={closeBookModal}
			contentLabel="Book Modal"
			style={bookModalStyles}
		>
			<h3 onClick={closeBookModal} className="svgRight"><FaTimes style={{color: 'black', float:'right', margin: '10px'}} /></h3>
			<EventPage />
		</Modal>

		<Footer />
    	</div>
	);
}

export default App;


//To change the text on the about page, go to the About.js file in the components folder

//To change photos, or add more in the gallery, go to ImageGallery.js in the components folder

//More information about the modals on https://www.npmjs.com/package/react-modal