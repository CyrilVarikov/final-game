import React, { Component } from 'react';
import '../../css/choosehero.css';

import mage from '../../images/hero2.png';

export default class Hero1 extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className='choosehero app'>
				<figure>
					<img src={mage} className='mage'/>
				</figure>
			</div>
		);
	}
}