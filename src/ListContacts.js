// import React, {Component} from 'react';
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class ListContacts extends Component {
	state = {
		query : ''
	}

	updateQuery = (value) => {
		this.setState({
			query : value.trim()
		})
	}

	clearQuery = () => {
		this.setState({
			query : ''
		})
	}

	static propTypes = {
		contacts : PropTypes.array.isRequired,
		onDeleteContact : PropTypes.func.isRequired
	}

	render() {
		const {contacts, onDeleteContact} = this.props
		const {query} = this.state

		let showingContacts
		if (query) {
			const match = new RegExp (escapeRegExp(query), 'i')
			showingContacts = contacts.filter((contact) => (match.test(contact.name)))
		} else
			showingContacts = contacts

		showingContacts.sort(sortBy('name'))

		return (
			<div className='list-contacts'>
				{// JSON.stringify(this.state)
				}
				<div className='list-contacts-top'>
				{
				// To recap how user input affects the ListContacts component's own state:
				// The user enters text into the input field.
				// An event listener invokes the updateQuery() function on every onChange event.
				// updateQuery() then calls setState(), merging in the new state to update the component's internal state.
				// Because its state has changed, the ListContacts component re-renders.
				}
					<input
						className='search-contacts'
						type='text'
						placeholder='Search contacts ...'
						value={query}
						onChange={(event) => this.updateQuery(event.target.value)} />
				</div>

				{
					showingContacts.length !== contacts.length && (
						<div className='showing-contacts'>
							<span>Now showing {showingContacts.length} of {contacts.length} total</span>
							<button onClick={this.clearQuery}>Show All</button>
						</div>
					)
				}

				<ol className='contact-list'>
					{ // this.props.contacts.map((contact) => (
						showingContacts.map((contact) => (
							<li key={contact.id} className='contact-list-item'>
								<div className='contact-avatar' style={{backgroundImage:`url(${contact.avatarURL})`}}>
								</div>
								<div className='contact-details'>
									<p>{contact.name}</p>
									<p>{contact.email}</p>
								</div>
								<button onClick={() => onDeleteContact(contact)} className='contact-remove'>
									Remove
								</button>
							</li>
					))}
				</ol>
			</div>
		)
	}
}



/*
function ListContacts(props) {
	return (
		<ol className='contact-list'>
			{props.contacts.map((contact) => (
				<li key={contact.id} className='contact-list-item'>
					<div className='contact-avatar' style={{backgroundImage:`url(${contact.avatarURL})`}}>
					</div>
					<div className='contact-details'>
						<p>{contact.name}</p>
						<p>{contact.email}</p>
					</div>
					<button onClick={() => props.onDeleteContact(contact)} className='contact-remove'>
						Remove
					</button>
				</li>
			))}
		</ol>
	)
}

ListContacts.propTypes = {
	contacts : PropTypes.array.isRequired,
	onDeleteContact : PropTypes.func.isRequired
}
*/

/*
// An example of ES6 function with an implicit return

const Email = (props) => (
  <div>
    {props.text}
  </div>
);
*/

/*
class ListContacts extends Component {
	render() {
		// console.log('Props', this.props);

		return (
			<ol className='contact-list'>
				{this.props.contacts.map((contact) => (
					<li key={contact.id} className='contact-list-item'>
						<div className='contact-avatar' style={{backgroundImage:`url(${contact.avatarURL})`}}>
						</div>
						<div className='contact-details'>
							<p>{contact.name}</p>
							<p>{contact.email}</p>
						</div>
						<button className='contact-remove'>
							Remove
						</button>
					</li>
				))}
			</ol>
		)
	}
}
*/


export default ListContacts;
