import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom'
import './style/style.css'
// import { FaInstagram, FaMixcloud } from 'react-icons/fa'
// import Header from './components/Header';
import HomePast from './components/HomePast'
import EventPage from './components/EventPage'
import Login from './components/Login'
// import SideLink from './components/SideLink'
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
            margin: '20px',
            backgroundColor: 'none'
        },
        content: {
            background: 'gray'
        }
    }
	
	return (
    	<div className="pageContainer">
			{/* <Header /> */}

		<Switch>
        	<Route path="/homepast"><HomePast /></Route>
			{/* <Route exact path="/"><Home 
				openAboutModal={openAboutModal}
				openBookModal={openBookModal} /></Route> */}
			<Route exact path="/"
				render={(props) => <Home locPath={props.location.pathname} openAboutModal={openAboutModal}
				openBookModal={openBookModal} />} />
			<Route path="/event"><EventPage /></Route>
			<Route path="/login"><Login /></Route>
    	</Switch>

		{/* <div className="sideLinkSection">
			<SideLink linkHref="https://www.instagram.com/djbentleytaylor/" sideLinkSymbol={<FaInstagram />} linkName="Instagram" />
			<SideLink linkHref="https://www.mixcloud.com/djbentleytaylor/?fbclid=IwAR1aNp9CH-UU4BlzRir3YRx2kkqowpty5x0VjetsFKsnl2x3JJHRjfziqHM" sideLinkSymbol={<FaMixcloud />} linkName="Mixcloud" />
		</div> */}
    	{/* <Footer /> */}

		<Modal
			isOpen={aboutModalIsOpen}
			onRequestClose={closeAboutModal}
			contentLabel="About Modal"
			style={aboutModalStyles}
		>
			<h3 onClick={closeAboutModal}><FaTimes style={{color: 'black', float:'right', margin: '10px'}} /></h3>
			<About />
		</Modal>

		<Modal
			isOpen={bookModalIsOpen}
			onRequestClose={closeBookModal}
			contentLabel="Book Modal"
			style={aboutModalStyles}
		>
			<h3 onClick={closeBookModal}><FaTimes style={{color: 'black', float:'right', margin: '10px'}} /></h3>
			<EventPage />
		</Modal>

		<Footer />
    	</div>
	);
}

export default App;
