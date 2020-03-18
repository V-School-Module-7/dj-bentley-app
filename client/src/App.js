import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './style/style.css'
import { FaInstagram, FaMixcloud } from 'react-icons/fa'
import Header from './components/Header';
import Home from './components/Home'
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
			<Route path="/event"><EventPage /></Route>
			<Route path="/login"><Login /></Route>
    	</Switch>

		<div className="sideLinkSection">
			<SideLink linkHref="https://www.instagram.com/djbentleytaylor/" sideLinkSymbol={<FaInstagram />} linkName="Instagram" />
			<SideLink linkHref="https://www.mixcloud.com/djbentleytaylor/?fbclid=IwAR1aNp9CH-UU4BlzRir3YRx2kkqowpty5x0VjetsFKsnl2x3JJHRjfziqHM" sideLinkSymbol={<FaMixcloud />} linkName="Mixcloud" />
		</div>
    	<Footer />
    	</div>
	);
}

export default App;
