import React from 'react';
import { Switch, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';

const App = (props) => {
	return (
		<React.Fragment>
			<Navbar />

			<Switch>
				<Route path="/">
					<div></div>
				</Route>
      		</Switch>
		</React.Fragment>
	);
}

export default App;
