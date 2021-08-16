import React from 'react';
import styles from '../Filter/Filter.module.css'

const Filter = ({value, onChange}) => (
  <label className={styles.Label}>
      Find contacts by name
      <input className={styles.Input} type="text" value={value} onChange={onChange} />
  </label>
     
);


export default Filter;

