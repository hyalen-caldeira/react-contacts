import React, { Component } from 'react';
import ListContacts from './ListContacts'

class App extends Component {
  state = {
    contacts : [
      {
        "id": "ryan",
        "name": "Ryan Florence",
        "email": "ryan@reacttraining.com",
        "avatarURL": "http://localhost:5001/ryan.jpg"
      },
      {
        "id": "michael",
        "name": "Michael Jackson",
        "email": "michael@reacttraining.com",
        "avatarURL": "http://localhost:5001/michael.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "email": "tyler@reacttraining.com",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ]
  }

  removeContact = (contact) => {
    /*
    // Another way to set a state is using objects. Prefer this option if
    // it's not necessary access to the previous state
    this.setState({
      subject: 'Hello! This is a new subject'
    })
    */

    // prevState match with the state class member variable
    this.setState((prevState) => ({
      // contacts must match with the array declared in state
      contacts : prevState.contacts.filter((c) => c.id !== contact.id)
    }))
  }

  render() {
    return (
      <div>
        <ListContacts onDeleteContact={this.removeContact} contacts={this.state.contacts}/>
      </div>
    )
  }
}

export default App;
