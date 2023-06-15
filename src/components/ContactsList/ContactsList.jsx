import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from './ContactsItem';
import { getContactFilter } from '../../redux/filterSelectors';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(getContactFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
};

export default ContactList;
