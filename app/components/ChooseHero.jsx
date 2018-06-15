import React, { Component } from 'react';
import '../css/choosehero.css';

import rambo from '../images/hero1.png';
import mage from '../images/hero2.png';
import hedgehog from '../images/hero3.png';

import RamboInfo from './ForInfoAboutHero/RamboInfo.jsx';
import WizzardInfo from './ForInfoAboutHero/WizzardInfo.jsx';
import HedgehogInfo from './ForInfoAboutHero/HedgehogInfo.jsx';
import Headline from './Headline.jsx';
import ImgCaption from './ImgCaption.jsx';

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
		if (this.state.handleHero1) return <RamboInfo />;
		if (this.state.handleHero2) return <WizzardInfo />;
		if (this.state.handleHero3) return <HedgehogInfo />;

		return (
			<div className='choosehero app'>
				<Headline caption='Choose your hero'/>
				<figure className='characters'>
					<section className='section'>
						<ImgCaption name='Rambo'/>
						<img src={rambo} className='rambo' onClick={this.handleHero1}/>
					</section>
					<section className='section'>
						<ImgCaption name='Wizzard'/>
						<img src={mage} className='wizzard' onClick={this.handleHero2}/>
					</section>
					<section className='section'>
						<ImgCaption name='Hedgehog'/>
						<img src={hedgehog} className='hedgehog' onClick={this.handleHero3}/>
					</section>
				</figure>
			</div>
		);
	}
}