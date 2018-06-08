import { render } from 'react-dom';
import React, { Component } from 'react';

import Registration from './components/Registration.jsx';
import ChooseHero from './components/Choose_hero.jsx';

class App extends Component {
	render() {
		return (
			<div>
				<Registration />
				<ChooseHero />
			</div>
		);
	}
}

render(
	<App />,
	document.getElementById("app")
);