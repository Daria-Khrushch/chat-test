import React, {Component} from 'react';

import ContactInfo from "./ContactInfo";
import Dialog from "./Dialog";
import MessageInput from "./MessageInput";

import s from './Chat.module.css'

class Chat extends Component {
	render() {
		if(Boolean(this.props.contacts.find((contact) => {return contact.selected === true}))) {
			let selectedContact = this.props.contacts.find((contact) => {
				return contact.selected === true;
			})
			return (
				<div className={s.chat}>
					<ContactInfo selectedContact={selectedContact} />
					<div className={s.dialog}>
						<Dialog selectedContact={selectedContact}/>
					</div>
					<MessageInput sendMessage={this.props.sendMessage}/>
				</div>
			)
		} else {
			return (
				<p>Select someone to chat with</p>
			)
		}
	}
}

export default Chat;