import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './style/style.css'
import { FaInstagram } from 'react-icons/fa'
import Header from './Header';
import Home from './Home'
import Contact from './Contact'
import EventPage from './EventPage'
import Login from './Login'
import SideLink from './SideLink'
import Footer from './Footer'

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
			<SideLink linkHref="a" sideLinkSymbol={<FaInstagram />} />
			<SideLink linkHref="a" sideLinkSymbol={<FaInstagram />} />
			<SideLink linkHref="a" sideLinkSymbol={<FaInstagram />} />
		</div>
    	<Footer />
    	</div>
	);
}

export default App;
