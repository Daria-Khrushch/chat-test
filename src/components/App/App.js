import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './App.module.css'
import '../../css/style.css'

import Contacts from "../Contacts/Contacts";
import Chat from "../Chat/Chat";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			contacts: []
		}

		this.selectContact = this.selectContact.bind(this);
		this.sendMessage = this.sendMessage.bind(this);
		this.receiveMessage = this.receiveMessage.bind(this);
	}

	componentDidMount() {
		let contacts = JSON.parse(localStorage.getItem('contacts')) ||
			[
				{
					id: uuidv4(),
					contactName: "Zahar",
					contactPhoto: "",
					selected: false,
					chatHistory: [
						{
							messageType: "inMessage",
							messageText: "Good afternoon",
							messageDate: {
								yy:2022,
								mm: 8,
								dd: 19,
								hh: 14,
								min: 48,
								sec: 0
							}
						},
						{
							messageType: "outMessage",
							messageText: "Hi",
							messageDate: {
								yy:2022,
								mm: 8,
								dd: 19,
								hh: 14,
								min: 50,
								sec: 0
							}
						},
						{
							messageType: "inMessage",
							messageText: "Do you want to work in our company?",
							messageDate: {
								yy:2022,
								mm: 8,
								dd: 19,
								hh: 14,
								min: 52,
								sec: 0
							}
            },
            {
							messageType: "outMessage",
							messageText: "Yes, of course",
							messageDate: {
								yy:2022,
								mm: 8,
								dd: 19,
								hh: 14,
								min: 55,
								sec: 0
							}
						}
					]
				},
				{
					id: uuidv4(),
					contactName: "Sveta",
					contactPhoto: "",
					selected: false,
					chatHistory: [
						{
							messageType: "inMessage",
							messageText: "Where do you live?",
							messageDate: {
								yy:2022,
								mm: 1,
								dd: 19,
								hh: 21,
								min: 56,
								sec: 0
							}
						},
						{
							messageType: "outMessage",
							messageText: "I live in Ukraine",
							messageDate: {
								yy:2022,
								mm: 1,
								dd: 19,
								hh: 22,
								min: 30,
								sec: 0
							}
						}
					]
				},
				{
					id: uuidv4(),
					contactName: "Max",
					contactPhoto: "",
					selected: false,
					chatHistory: [
						{
							messageType: "inMessage",
							messageText: "What sports do you like?",
							messageDate: {
								yy:2022,
								mm: 7,
								dd: 9,
								hh: 7,
								min: 43,
								sec: 0
							}
						},
						{
							messageType: "outMessage",
							messageText: "I like playing basketball and volleyball. And you?",
							messageDate: {
								yy:2022,
								mm: 7,
								dd: 9,
								hh: 7,
								min: 49,
								sec: 0
							}
						},
						{
							messageType: "inMessage",
							messageText: "I like gym.",
							messageDate: {
								yy:2022,
								mm: 7,
								dd: 9,
								hh: 8,
								min: 13,
								sec: 0
							}
						}
					]
      },
			]
		;

		this.setState({
			contacts: contacts
		})
	}

	componentDidUpdate() {
		localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
	}

	selectContact(id) {
		this.setState({
			contacts: this.state.contacts.map((contact) => {
				contact.selected = false;
				if(contact.id === id) {
					contact.selected = !contact.selected;
				}
				return contact;
			})
		})
	}

	sendMessage(message) {
		if(message) {
			let newMessage,
				now = new Date(),
				updatedContacts,
				contactId;

			newMessage = {
				messageType: "outMessage",
				messageText: message,
				messageDate: {
					yy: now.getFullYear(),
					mm: now.getMonth() + 1,
					dd: now.getDate(),
					hh: now.getHours(),
					min: now.getMinutes(),
					sec: now.getSeconds()
				}
			};
			contactId = this.state.contacts.find((contact) => {return contact.selected === true}).id;
			updatedContacts = this.state.contacts.map(el => (el.selected === true ? Object.assign(el, {chatHistory : [...el.chatHistory, newMessage]}) : el));

			this.setState({
				contacts: updatedContacts
			})

			this.receiveMessage(contactId)
		}
	}

	receiveMessage(id) {
		fetch('https://api.chucknorris.io/jokes/random')
			.then(res => res.json())
			.then((data) => {
				this.setState({inMessage: data.value})
			})

		setTimeout(()=> {
			let respondMessage, now = new Date(), updatedContacts;
			respondMessage = {
				messageType: "inMessage",
				messageText: this.state.inMessage,
				messageDate: {
					yy: now.getFullYear(),
					mm: now.getMonth() + 1,
					dd: now.getDate(),
					hh: now.getHours(),
					min: now.getMinutes(),
					sec: now.getSeconds()
				}
			};
			updatedContacts = this.state.contacts.map(el => (el.id === id ? Object.assign(el, {chatHistory : [...el.chatHistory, respondMessage]}) : el));

			this.setState({
				contacts: updatedContacts
			})
		}, 10000)
	}

	render() {
		return (
			<div className={s.container}>
				<div className={s.wrap}>
					<Contacts contacts={this.state.contacts}
					              selectContact={this.selectContact}
					/>
					<Chat contacts={this.state.contacts}
					          sendMessage={this.sendMessage}
					/>
				</div>
			</div>
		)
	}

}

export default App;
