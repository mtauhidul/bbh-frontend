import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import Navbar from '../../components/navbar/Navbar';
import { getData } from '../../services/api';
import styles from './user.module.css';

const User = () => {
  const [id, setId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const getUserId = async () => {
    if (phoneNumber) {
      console.log(phoneNumber);
      const response = await getData(phoneNumber);
      console.log(response);
      setId(response);
    } else {
      toast.error('Please enter a phone number correctly');
    }
  };

  return (
    <div className={styles.userContainer}>
      <Navbar />
      <div className={styles.userForm}>
        <h3>
          {id !== ''
            ? `Your registration ID is:`
            : 'Retrieve your registration ID'}
        </h3>
        {id !== '' && (
          <h2
            style={{
              color: 'green',
              fontWeight: 'bold',
              fontSize: '40px',
            }}>
            <span className={styles.id}>{id.slice(0, 8)}</span>
          </h2>
        )}
        {id === '' && (
          <TextField
            onChange={(e) => setPhoneNumber(e.target.value)}
            sx={{
              width: '100%',
              margin: '12px 0px',
              height: '50px',
              fontSize: '16px',
            }}
            id='outlined-basic'
            label='Phone Number'
            variant='outlined'
          />
        )}
        {id === '' && (
          <Button
            onClick={getUserId}
            sx={{
              width: '100%',
              margin: '12px 0px',
              height: '50px',
              fontSize: '16px',
            }}
            color='success'
            variant='contained'>
            Get ID
          </Button>
        )}
      </div>
    </div>
  );
};

export default User;
