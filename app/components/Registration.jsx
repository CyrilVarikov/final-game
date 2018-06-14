import React, { Component } from 'react';
import ChooseHero from './ChooseHero.jsx';
import '../css/registration.css';
import Button from './Button.jsx';

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
		const name = this.refs.name.value;
		const password = this.refs.password.value;

		this.setState({
			hidden: true
		});
	}

	render() {
		if (!this.state.hidden) {
			return (
				<div className='registration app'>
					<form onSubmit = {this.handleSubmit}>
						<input type="text" ref="name" placeholder='Name*' maxLength='16' minLength='3'/><br/>
						<input type="password" ref="password" placeholder='Password*' maxLength='16' minLength='4'/><br/>
						<Button type='submit' value='Sign In' className='button' />
					</form>
				</div>
			);
		} else {
			return (
				<ChooseHero />
			);
		}
	}
}
