import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './style/style.css'
import { FaInstagram } from 'react-icons/fa'
import Header from './components/Header';
import Home from './components/Home'
import Contact from './components/Contact'
import EventPage from './components/EventPage'
import Login from './components/Login'
import SideLink from './components/SideLink'
import Footer from './components/Footer'

function App() {
	return (
    	<div className="pageContainer">
			<Header />

		<Switch>
        	<Route exact path="/"><Home /></Route>
			<Route path="/contact"><Contact /></Route>
			<Route path="/event"><EventPage /></Route>
			<Route path="/login"><Login /></Route>
    	</Switch>

		<div className="sideLinkSection">
			<SideLink linkHref="a" sideLinkSymbol={<FaInstagram />} linkName="Instagram" />
			<SideLink linkHref="a" sideLinkSymbol={<FaInstagram />} linkName="Instagram" />
			<SideLink linkHref="a" sideLinkSymbol={<FaInstagram />} linkName="Instagram" />
		</div>
    	<Footer />
    	</div>
	);
}

export default App;
