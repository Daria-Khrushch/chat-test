import React, { Component } from 'react';
import avatar from "../../img/avatar.png";
import s from './Chat.module.css'

class Dialog extends Component {
	render() {
		return (this.props.selectedContact.chatHistory.map((message) => {
			const date = message.messageDate;
			return (<div className={message.messageType}
				key={new Date(date.yy, date.mm, date.dd, date.hh, date.min, date.sec)}
			>
				<div className={s.layout}>
					<img src={avatar} alt="avatar" />
				<div className={s.layoutTwo}>
					<p className={message.messageType}> {message.messageText}</p>
	
						<span className={s.date}>
							{(date.min < 10) ? <span>{date.hh}:0{date.min} </span> : <span>{date.hh}:{date.min} </span>}
							<span>{date.dd}/{date.mm}/{date.yy}</span>
						</span>
				</div>
				</div>
				
					</div>)
				}
			)
		)
	}
}

export default Dialog;