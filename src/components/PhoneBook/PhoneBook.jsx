import React, { Component } from 'react';

import css from './PhoneBook.module.scss';

class PhoneBook extends Component {
  state = {
    name: '',
    number: '',
  };

  isFormEmpty = () => {
    return !this.state.name || !this.state.number;
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.isFormEmpty()) {
      alert('All fields must be filled!');
      return;
    }

    this.props.onSubmit({
      name: this.state.name,
      phone: this.state.number,
    });
    this.setState(() => ({
      name: '',
      number: '',
    }));
  };

  onChange = ({target: {name, value}}) => {
    this.setState(() => ({
      [name]: value,
    }));
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className={css.form}>
        <label className={css.label}>
          Enter name:{' '}
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.onChange}
            value={this.state.name}
          />
        </label>
        <label className={css.label}>
          Enter phone number:{' '}
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.onChange}
            value={this.state.number}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default PhoneBook;
