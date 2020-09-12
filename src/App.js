import React from 'react';
import { Switch, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import CaixaEntrada from './Components/CaixaEntrada/CaixaEntrada';

const App = (props) => {
	return (
		<React.Fragment>
			<Navbar />

			<Switch>
				<Route path="/">
					<CaixaEntrada />
				</Route>
      		</Switch>
		</React.Fragment>
	);
}

export default App;
