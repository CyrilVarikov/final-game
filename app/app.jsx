import { render } from 'react-dom';
import React, { Component } from 'react';

import Registration from './components/Registration.jsx';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <Registration />;
	}
}

render(
	<App />,
	document.getElementById("app")
);