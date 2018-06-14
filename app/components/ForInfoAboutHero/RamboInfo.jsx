import React, { Component } from 'react';
import '../../css/AboutHero.css';

import rambo from '../../images/hero1.png';
import gun from '../../images/ramboWeapons/Gun01.png';
import sword from '../../images/ramboWeapons/Sword01.png';

import Button from '../Button.jsx';
import Article from './Article.jsx';

const text = `Rambo is a professional killer. 
			  	Excellent skills in possession of firearms and 
				bladed weapons will not leave monsters a chance to escape!`

export default class Hero1 extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className='aboutHero app'>
				<Article className='article' text={text} firstSkill={gun} secondSkill={sword} hero={rambo}/>
				<section className='buttonWrapper'>
					<Button type='button' value='Back' className='button' />
					<Button type='button' value='Play' className='button'/>
				</section>
				
			</div>
		);
	}
}