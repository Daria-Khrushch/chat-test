import React, {Component} from 'react';
import avatar from "../../img/avatar.png"

import s from './Chat.module.css'

class ContactInfo extends Component {
	render() {
		return (
			<div className={s.contactInfo}>
				<img className={s.contactImg}  src={avatar} alt="avatar"/>
				<h2>{this.props.selectedContact.contactName}</h2>
			</div>
		)
	}

}

export default ContactInfo;