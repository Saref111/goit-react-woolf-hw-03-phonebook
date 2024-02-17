import React, { Component } from 'react';
import { getUniqueId } from 'helpers/helpers';

import PhoneBook from './PhoneBook/PhoneBook';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    phones: [],
    filter: '',
  };

  isContactExist = (name) => {
    return this.state.phones.some(
      (it) => it.name.toLowerCase() === name.toLowerCase()
    );
  };

  addContact = ({ name, phone }) => {
    if (this.isContactExist(name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState((prevState) => {
      return {
        phones: [
          ...prevState.phones,
          {
            name,
            phone,
            id: getUniqueId(),
          },
        ],
      };
    });
  };

  deleteContact = (id) => {
    this.setState((prevState) => {
      return {
        phones: prevState.phones.filter((it) => it.id !== id),
      };
    });
  };

  setFilter = (filter) => {
    this.setState(() => ({
      filter,
    }));
  };

  getFilteredContacts = () => {
    return this.state.phones.filter((contact) => {
      return (
        contact.name.toLowerCase().includes(this.state.filter.toLowerCase()) ||
        contact.phone.includes(this.state.filter)
      );
    });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phone Book</h1>
        <PhoneBook onSubmit={this.addContact} />
        <Filter setFilter={this.setFilter} filterValue={this.state.filter} />
        <h2>Contacts</h2>
        <Contacts
          contacts={this.getFilteredContacts()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
