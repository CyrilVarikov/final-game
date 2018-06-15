import React, { Component } from 'react';
import ChooseHero from '../ChooseHero.jsx';
import '../../css/AboutHero.css';
import TheGame from '../GameComponents/TheGame.jsx';


import hedgehog from '../../images/hero3.png';
import firstSkill from '../../images/hedgehogSkills/supahpossum-2_18.png';
import secondSkill from '../../images/hedgehogSkills/supahpossum-2_06.png';

import Button from '../Button.jsx';
import Article from './Article.jsx';

const text = `Hedgehog. Steep and brutal hedgehog. 
				He grew up in a dysfunctional area, so he knows how to fight well.
				And his father was a magician, so the hedgehog also has some abilities`

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
				<Article className='article' class='allign' text={text} firstSkill={firstSkill} secondSkill={secondSkill} hero={hedgehog}/>
				<section className='buttonWrapper'>
					<Button type='button' value='Back' className='button' onClick={this.goBack} />
					<Button type='button' value='Play' className='button' onClick={this.goPlay}/>
				</section>
				
			</div>
		);
	}
}