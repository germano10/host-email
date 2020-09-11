import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const rootReducer = combineReducers({});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
  	document.getElementById("root")
);
