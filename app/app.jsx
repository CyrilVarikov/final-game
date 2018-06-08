import { render } from 'react-dom';
import React, { Component } from 'react';

import Registration from './components/Registration.jsx';
import ChooseHero from './components/ChooseHero.jsx';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Registration />
			</div>
		);
	}
}

render(
	<App />,
	document.getElementById("app")
);