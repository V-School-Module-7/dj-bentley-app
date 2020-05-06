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
			background: 'gray',
			margin: 0,
			padding: 0
        }
    }
	
	return (
    	<div className="pageContainer">

		<Switch>
			<Route exact path="/"
				render={(props) => <Home locPath={props.location.pathname} openAboutModal={openAboutModal}
				openBookModal={openBookModal} />} />
			<Route path="/event"><EventPage /></Route>
			<Route path="/login"><Login /></Route>
    	</Switch>

		<Modal
			isOpen={aboutModalIsOpen}
			onRequestClose={closeAboutModal}
			contentLabel="About Modal"
			style={aboutModalStyles}
		>
			<h3 onClick={closeAboutModal} className="svgRight"><FaTimes style={{color: 'black', float:'right', margin: '10px'}} /></h3>
			<About />
		</Modal>

		<Modal
			isOpen={bookModalIsOpen}
			onRequestClose={closeBookModal}
			contentLabel="Book Modal"
			style={aboutModalStyles}
		>
			<h3 onClick={closeBookModal} className="svgRight"><FaTimes style={{color: 'black', float:'right', margin: '10px'}} /></h3>
			<EventPage />
		</Modal>

		<Footer />
    	</div>
	);
}

export default App;
