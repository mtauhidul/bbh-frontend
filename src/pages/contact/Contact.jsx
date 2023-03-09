import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import styles from './contact.module.css';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.mainHeader}>
        <h1>Contact</h1>
      </div>
    </div>
  );
};

export default Contact;
