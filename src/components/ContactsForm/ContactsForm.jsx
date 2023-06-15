import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactSlice';
import style from './ContactsForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    if (name && /^\d+$/.test(number)) {
      dispatch(addContact({ name, number }));
    }
  };

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label className={style.label}>Name</label>
      <input
        type="text"
        className={style.input}
        placeholder="Add a name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={name}
        onChange={handleNameChange}
      />
      <label className={style.label}>Number</label>
      <input
        type="text"
        className={style.input}
        placeholder="Add a number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        value={number}
        onChange={handleNumberChange}
      />

      <button type="submit" className={style.btn}>
        Add
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;
