import React, { Component } from 'react';
import search from '../../img/search.png'
import s from './Contacts.module.css'

class SearchContact extends Component {
	constructor(props) {
		super(props);

		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		this.props.searchContact(e.target.value);
	}

	render()
	{
		return (
			<div className={s.inputContainer}>
				<label>
					<input className={s.input}
					type="text"
				       title="searchedContact"
				       placeholder="Search or start new chat"
				       onChange={this.onChange}
				/>
				<button type="submit">
				<img className={s.search} src={search} alt='send'></img>
				</button>
				</label>
				
			</div>
		)
	}

}

export default SearchContact;