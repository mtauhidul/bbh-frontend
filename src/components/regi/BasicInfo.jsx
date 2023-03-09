import { TextField } from '@mui/material';
import React from 'react';
import styles from './basicInfo.module.css';

const BasicInfo = () => {
  return (
    <div className={styles.container}>
      <h2>Basic Information</h2>
      <form className={styles.form} action=''>
        <div className={styles.inputWrapper}>
          <TextField
            sx={{
              minWidth: '18rem',
              color: '#D1D0D2',
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#34373B',
                color: '#FFFFFF',
              },
              '& .MuiInputLabel-root': {
                color: '#D1D0D2',
              },
            }}
            id='outlined-basic'
            label='First Name'
            variant='outlined'
          />
          <TextField
            sx={{
              minWidth: '18rem',

              color: '#D1D0D2',
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#34373B',
                color: '#FFFFFF',
              },
              '& .MuiInputLabel-root': {
                color: '#D1D0D2',
              },
            }}
            id='outlined-basic'
            label='Last Name'
            variant='outlined'
          />
        </div>
        <div className={styles.inputWrapper}>
          <TextField
            sx={{
              minWidth: '18rem',

              color: '#D1D0D2',
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#34373B',
                color: '#FFFFFF',
              },
              '& .MuiInputLabel-root': {
                color: '#D1D0D2',
              },
            }}
            id='outlined-basic'
            label='Email'
            variant='outlined'
          />
          <TextField
            sx={{
              minWidth: '18rem',

              color: '#D1D0D2',
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#34373B',
                color: '#FFFFFF',
              },
              '& .MuiInputLabel-root': {
                color: '#D1D0D2',
              },
            }}
            id='outlined-basic'
            label='Phone Number'
            variant='outlined'
          />
        </div>
        <div className={styles.inputWrapper}>
          <TextField
            sx={{
              minWidth: '18rem',

              color: '#D1D0D2',
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#34373B',
                color: '#FFFFFF',
              },
              '& .MuiInputLabel-root': {
                color: '#D1D0D2',
              },
            }}
            id='outlined-basic'
            label='Department'
            variant='outlined'
          />
          <TextField
            sx={{
              minWidth: '18rem',

              color: '#D1D0D2',
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#34373B',
                color: '#FFFFFF',
              },
              '& .MuiInputLabel-root': {
                color: '#D1D0D2',
              },
            }}
            id='outlined-basic'
            label='Blood Group'
            variant='outlined'
          />
        </div>
        <div className={styles.inputWrapper}>
          <TextField
            sx={{
              minWidth: '18rem',

              color: '#D1D0D2',
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#34373B',
                color: '#FFFFFF',
              },
              '& .MuiInputLabel-root': {
                color: '#D1D0D2',
              },
            }}
            id='outlined-basic'
            label='District'
            variant='outlined'
          />
          <TextField
            sx={{
              minWidth: '18rem',

              color: '#D1D0D2',
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#34373B',
                color: '#FFFFFF',
              },
              '& .MuiInputLabel-root': {
                color: '#D1D0D2',
              },
            }}
            id='outlined-basic'
            label='Thana'
            variant='outlined'
          />
        </div>
      </form>
    </div>
  );
};

export default BasicInfo;
