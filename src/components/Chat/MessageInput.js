import React, { Component } from 'react';
import send from '../../img/send.png'
import s from './Chat.module.css'

class MessageInput extends Component {
	constructor(props) {
		super(props);

		this.state = {
			outMessage: ""
		}

		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();
		this.props.sendMessage(this.state.outMessage);
		this.setState({
			outMessage: ""
		})
	}

	onChange(e) {
		this.setState({
			outMessage: e.target.value
		})
	}

	render() {
		return (
			<form className={s.form} onSubmit={this.onSubmit}>
				
				<input className={s.input} type="text"
				       placeholder="Type some message"
				       value={this.state.outMessage}
				       onChange={this.onChange}
				/>
				<button type="submit">
				<img className={s.send} src={send} alt='send'></img>
				</button>
			</form>
		)
	}

}

export default MessageInput;