import React, { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import shortid from 'shortid';
import ContactsList from '../src/components/Contacts/Contacts';
import Contacts from '../src/components/Contacts/ContactsHead';
import Filter from './components/Filter/Filter'


class App extends Component {
  state = {
    contacts: [],
    filter: '',

  };

  componentDidMount() {


    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {


    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }


  formSubmitHandler = data => {


    const isRepeatName = this.state.contacts.some(el => el.name === data.name,);
    if (isRepeatName) { alert(`${data.name} is already in contact`); return; }

    const newContact = { ...data, id: shortid.generate(), };

    this.setState(prevState => ({
      contacts: prevState.contacts.concat([newContact]), ...prevState.contacts,
    }))
  }

  onChange = e => {
    this.setState({ filter: e.currentTarget.value });

  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();


    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };


  render() {

    const VisibleContacts = this.getVisibleContacts();

    return (
      <>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <Contacts />
        <Filter value={this.state.filter} onChange={this.onChange} />
        <ContactsList contacts={VisibleContacts} onDeleteContact={this.deleteContact} />

      </>
    );
  }
}


export default App;
