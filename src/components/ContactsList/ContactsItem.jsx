import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';
import style from './ContactsList.module.css';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteContact({ id }));
  };

  return (
    <li className={style.li}>
      {name} : {number}
      <button className={style.btn} onClick={handleDeleteClick}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
