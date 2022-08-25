import React, {Component} from 'react';
import avatar from "../../img/avatar.png";
import s from './Contacts.module.css'

class ContactsList extends Component{
	render() {
		const SORTED_AND_FILTERED_CONTACTS = this.props.contacts.sort((contact1, contact2) => {
			const a = contact1.chatHistory[contact1.chatHistory.length - 1].messageDate,
				b = contact2.chatHistory[contact2.chatHistory.length - 1].messageDate;
			return new Date(b.yy, b.mm, b.dd, b.hh, b.min, b.sec) - new Date(a.yy, a.mm, a.dd, a.hh, a.min, a.sec);
		}).filter((contact) => {
			if(this.props.searchedContact) {
				return contact.contactName.toLocaleLowerCase().includes(this.props.searchedContact.toLowerCase());
			} else {
				return contact;
			}
		});


		return (SORTED_AND_FILTERED_CONTACTS.map((contact) => {
			const date = contact.chatHistory[contact.chatHistory.length - 1].messageDate;
				return (
				<div className={s.list} key={contact.id} onClick={this.props.selectContact.bind(this, contact.id)}>
						<div className={s.item}>
							<div className={s.itemContainer}>
								<img src={avatar} alt="avatar"/>
						<div className={s.contact}>
								<h4>{contact.contactName}</h4>
								<p >{contact.chatHistory[contact.chatHistory.length - 1].messageText}</p>
							</div>
							</div>
							
						<p className={s.date}>
							{(date.min < 10) ? <span>{date.hh}:0{date.min} </span> : <span>{date.hh}:{date.min} </span>}
							<span>{date.dd}/{date.mm}/{date.yy}</span>
							</p>
							
					</div>
					
				</div>
			)
		}))
	}

}

export default ContactsList;