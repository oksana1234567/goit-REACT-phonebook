import React, { Component } from 'react';
import styles from '../ContactForm/ContactForm.module.css'



class InputForm extends Component {
    state = {
    name: '',
    number: ''
    };
         
handleChange = e => {
    const { name, value } = e.currentTarget;
      this.setState({ [name]: value });
     
    };

handleSubmit = e => {
    e.preventDefault();
      this.props.onSubmit({ ...this.state });
      this.reset();
    };
    
reset = () => {
     this.setState({ name: '', number: '' });
    };

render() {
    const { name,  number} = this.state;


return (
<>
<section>
<h2 className={styles.PhonebookHead}>Phonebook</h2>
<h3 className={styles.labelInput}>Name</h3>
<form onSubmit={this.handleSubmit}>
<input className={styles.Input}
onChange={this.handleChange}
type="text"
name="name"
value = {name}
pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
required
/>
<h3 className={styles.labelInput}>Number</h3>
<input className={styles.Input}
onChange={this.handleChange}
type="tel"
name="number"
value = {number}
pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
required
/>
<button type="submit" className={styles.Button}> Add contact </button>
</form>
</section>
</>
);
}
}


export default InputForm;