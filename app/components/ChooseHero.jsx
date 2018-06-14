import React, { Component } from 'react';
import '../css/choosehero.css';

import rambo from '../images/hero1.png';
import mage from '../images/hero2.png';
import hedgehog from '../images/hero3.png';

import Hero1 from './Hero1.jsx';
import Hero2 from './Hero2.jsx';
import Hero3 from './Hero3.jsx';

export default class ChooseHero extends Component {
	constructor(props) {
		super(props);
		this.state = {
			handleHero1: false,
			handleHero2: false,
			handleHero3: false
		}

		this.handleHero1 = this.handleHero1.bind(this);
		this.handleHero2 = this.handleHero2.bind(this);
		this.handleHero3 = this.handleHero3.bind(this);
	}

	handleHero1() {
		this.setState({ handleHero1: !this.state.handleHero1 });
	}

	handleHero2() {
		this.setState({ handleHero2: !this.state.handleHero2 });
	}

	handleHero3() {
		this.setState({ handleHero3: !this.state.handleHero3 });
	}

	render() {
		if (this.state.handleHero1) return <Hero1 />;
		if (this.state.handleHero2) return <Hero2 />;
		if (this.state.handleHero3) return <Hero3 />;

		return (
			<div className='choosehero app'>
				<figure>
					<img src={rambo} className='rambo' onClick={this.handleHero1}/>
					<img src={mage} className='mage' onClick={this.handleHero2}/>
					<img src={hedgehog} className='hedgehog' onClick={this.handleHero3}/>
				</figure>
			</div>
		);
	}
}