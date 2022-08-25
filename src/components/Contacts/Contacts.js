import React, {Component} from 'react';

import User from "./User";
import SearchContact from "./SearchContact";
import ContactsList from "./ContactsList";

import s from './Contacts.module.css'

class Contacts extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchedContact: ""
		}

		this.searchContact = this.searchContact.bind(this);
	}

	searchContact(value) {
		this.setState({
			searchedContact: value
		})
	}



	render() {
		return (
			<div className={s.contacts}>
				<div className={s.user}>
					<User />
					<SearchContact searchContact = {this.searchContact} />
				</div>
				<div className={s.contactsList}>
					<h2 className={s.title}>Chats</h2>
					<ContactsList contacts={this.props.contacts}
					              searchedContact={this.state.searchedContact}
					              selectContact={this.props.selectContact}
					/>
				</div>
			</div>
		)
	}

}

export default Contacts;