import React, { Component } from 'react';
import ChooseHero from './ChooseHero.jsx';

import '../css/registration.css';

export default class Registration extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hidden: false
		};

    this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		let name = this.refs.name.value;
		let password = this.refs.password.value;

		this.setState({
			hidden: true
		});
	}

	render() {
		if (!this.state.hidden) {
			return (
				<form onSubmit = {this.handleSubmit}>
					<input type="text" ref="name" placeholder='Name*' maxLength='16' minLength='3'/><br/>
					<input type="password" ref="password" placeholder='Password*' maxLength='16' minLength='4'/><br/>
					<input type="submit" value="Sign in"/>
				</form>
			);
		} else {
			return (
				<ChooseHero />
			);
		}
	}
}
