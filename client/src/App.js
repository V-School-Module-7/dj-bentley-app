import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from './Header';
import Home from './Home'
import Contact from './Contact'
import EventPage from './EventPage'
import Login from './Login'
import Footer from './Footer'

function App() {
	return (
    	<div>
			<Header />

		<Switch>
        	<Route exact path="/"><Home /></Route>
			<Route path="/contact"><Contact /></Route>
			<Route path="/event"><EventPage /></Route>
			<Route path="/login"><Login /></Route>
    	</Switch>
    	<Footer />
    	</div>
	);
}

export default App;
