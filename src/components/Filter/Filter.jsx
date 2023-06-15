import React from 'react';
import PropTypes from 'prop-types';
import style from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContactFilter } from '../../redux/filterSelectors';
import { setContactFilter } from '../../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getContactFilter);

  const handleFilterChange = event => {
    dispatch(setContactFilter(event.currentTarget.value));
  };

  return (
    <div className={style.filter}>
      <label className={style.label}>Find contacts by name</label>
      <input
        className={style.input}
        name="filter"
        type="text"
        id="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  filter: PropTypes.func,
};

export default Filter;
