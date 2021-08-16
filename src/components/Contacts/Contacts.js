import React from 'react';
import styles from '../Contacts/Contacts.module.css'

const Contacts = ({ contacts, onDeleteContact }) => (
  <section>
              
   <ul>
        
      {contacts.map(contact => (
      <li className={styles.contactEl} key={contact.id}>
      {contact.name} : {contact.number}
          <button
          type="button"
          className={styles.DeleteBtn}
          onClick={() => onDeleteContact(contact.id)}
          >
          Удалить
          </button>
      </li>
      ))
      }
      </ul>
   
    </section>
     
);


export default Contacts;

