import React, { Component } from 'react';
import ChooseHero from '../ChooseHero.jsx';
import TheGame from '../GameComponents/TheGame.jsx';

import '../../css/AboutHero.css';

import wizzard from '../../images/hero2.png';
import firstSkill from '../../images/wizzardSkills/fireball.png';
import secondSkill from '../../images/wizzardSkills/lightning.png';

import Button from '../Button.jsx';
import Article from './Article.jsx';

const text = `Wizard. The greatest magician of all time. 
				Skillfully owns the power of fire and lightning. 
				Without any problems, he will roast all the monsters on your way!`

export default class Hero1 extends Component {
	constructor(props) {
		super(props);

		this.state = {
			goBack : false,
			goPlay : false
		}
	}

	goBack = () => {
		this.setState({goBack : true });
	}

	goPlay = () => {
		this.setState({goPlay : true });
	}

	render() {
		if(this.state.goBack){
			return <ChooseHero />
		}

		if(this.state.goPlay){
			return <TheGame img={'s'} />
		}

		return(
			<div className='aboutHero app'>
				<Article className='article' class='allign' text={text} firstSkill={firstSkill} secondSkill={secondSkill} hero={wizzard}/>
				<section className='buttonWrapper'>
					<Button type='button' value='Back' className='button' onClick={this.goBack}/>
					<Button type='button' value='Play' className='button' onClick={this.goPlay}/>
				</section>
				
			</div>
		);
	}
}