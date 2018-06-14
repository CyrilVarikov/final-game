import React, { Component } from 'react';
import '../css/choosehero.css';

import rambo from '../images/hero1.png';

export default class Hero1 extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className='choosehero app'>
				<figure>
					<img src={rambo} className='rambo'/>
				</figure>
			</div>
		);
	}
}