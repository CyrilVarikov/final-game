import React, { Component } from 'react';

export default class Registration extends Component {
	constructor(props) {
		super(props);

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
					<label>Name</label><br/>
					<input type="text" ref="name"/><br/>
	
					<label>Password</label><br/>
					<input type="password" ref="password"/><br/>
	
					<input type="submit" value="Registration"/>
				</form>
			);
		} else {
			return (
				<ChooseHero />
			);
		}
	}
}