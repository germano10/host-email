import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import CaixaEntrada from './Components/CaixaEntrada/CaixaEntrada';
import Enviado from './Components/Enviado/Enviado';
import Lixeira from './Components/Lixeira/Lixeira';
import Rascunho from './Components/Rascunho/Rascunho';
import Spam from './Components/Spam/Spam';
import Arquivo from './Components/Arquivo/Arquivo';

const App = (props) => {
	return (
		<BrowserRouter>
			<Navbar />

			<Switch>
				<Route exact path="/">
					<CaixaEntrada />
				</Route>
				<Route path="/enviado">
					<Enviado />
				</Route>
				<Route path="/lixeira">
					<Lixeira />
				</Route>
				<Route path="/rascunho">
					<Rascunho />
				</Route>
				<Route path="/spam">
					<Spam />
				</Route>
				<Route path="/arquivo">
					<Arquivo />
				</Route>
      		</Switch>
		</BrowserRouter>
	);
}

export default App;
