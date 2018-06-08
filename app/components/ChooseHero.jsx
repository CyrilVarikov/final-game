import React, { Component } from 'react';

export default class ChooseHero extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="choose-hero">
				<h1>Choose hero</h1>
				<img src="http://i.imgur.com/8IYWPs1.png"/>
				<img src="https://im0-tub-by.yandex.net/i?id=c0bb46b2dddcba627daa7271423ac467&n=13"/>
				<img src="https://d1u5p3l4wpay3k.cloudfront.net/wowpedia/3/38/Thrall_Daerone.png?version=fe41f5de94f449cb2a103990af54154e"/>
			</div>
		);
	}
}