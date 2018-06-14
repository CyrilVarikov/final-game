import React, { Component } from 'react';
import '../css/choosehero.css';

import hedgehog from '../images/hero3.png';

export default class Hero3 extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className='choosehero app'>
				<figure>
					<img src={hedgehog} className='hedgehog'/>
				</figure>
			</div>
		);
	}
}