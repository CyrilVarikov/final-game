import React, { Component } from 'react';

export default class Registration extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			password: ''
		};

		this.onChangeName = this.onChangeName.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		alert('Name: ' + this.state.name + ', Pass: ' + this.state.password);
	}

	onChangeName(event) {
		let value = event.target.value;
		this.setState({
			name: value
		});
	}

	onChangePassword(event) {
		let value = event.target.value;
		this.setState({
			password: value
		});
	}

	render() {
		return (
			<form onSubmit = {this.handleSubmit}>
				<label>Name</label><br/>
				<input type="text" value={this.state.name} onChange={this.onChangeName}/><br/>

				<label>Password</label><br/>
				<input type="password" value={this.state.password} onChange={this.onChangePassword}/><br/>

				<input type="submit" value="Registration"/>
			</form>
		);
	}
}
