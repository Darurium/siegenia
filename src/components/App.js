import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Classic from './Classic/Classic';
import Titan from './Titan/Titan';
import NavBar from './NavBar/NavBar';
import About from './About/About';

import './App.scss';


function App() {	

	return (
		<BrowserRouter>
			<div className="app">
				<NavBar/>
				<div className="app__form">
					<Route path="/" exact>
						<About/>
					</Route>
					<Route path="/classic">
						<Classic/>
					</Route>
					<Route path="/titan">
						<Titan/>
					</Route>								
				</div>
			</div>
			
		</BrowserRouter>
	);
}

export default App;