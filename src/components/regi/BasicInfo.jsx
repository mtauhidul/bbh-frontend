import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useData } from '../../state/data';
import styles from './basicInfo.module.css';

const BasicInfo = () => {
  const { state, setData } = useData();

  const inputStyle = {
    minWidth: '18rem',
    color: '#D1D0D2',
    '& .MuiOutlinedInput-root': {
      backgroundColor: '#34373B',
      color: '#FFFFFF',
    },
    '& .MuiInputLabel-root': {
      color: '#D1D0D2',
    },
  };

  const [formData, setFormData] = useState({
    firstName: sessionStorage.getItem('firstName') || state.firstName || '',
    lastName: sessionStorage.getItem('lastName') || state.lastName || '',
    email: sessionStorage.getItem('email') || state.email || '',
    lastRoomNumber:
      sessionStorage.getItem('lastRoomNumber') || state.lastRoomNumber || '',
    department: sessionStorage.getItem('department') || state.department || '',
    bloodGroup: sessionStorage.getItem('bloodGroup') || state.bloodGroup || '',
    district: sessionStorage.getItem('district') || state.district || '',
    thana: sessionStorage.getItem('thana') || state.thana || '',
  });

  useEffect(() => {
    setData({
      ...state,
      ...formData,
    });
  }, [formData]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));

    sessionStorage.setItem(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data
  };

  return (
    <div className={styles.container}>
      <h2>Basic Information</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputWrapper}>
          <TextField
            sx={inputStyle}
            id='firstName'
            name='firstName'
            label='First Name'
            variant='outlined'
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
          <TextField
            sx={inputStyle}
            id='lastName'
            name='lastName'
            label='Last Name'
            variant='outlined'
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.inputWrapper}>
          <TextField
            sx={inputStyle}
            id='email'
            name='email'
            type='email'
            label='Email'
            variant='outlined'
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <TextField
            sx={inputStyle}
            id='lastRoomNumber'
            name='lastRoomNumber'
            label='Last Room Number'
            variant='outlined'
            value={formData.lastRoomNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.inputWrapper}>
          <TextField
            sx={inputStyle}
            id='department'
            name='department'
            label='Department'
            variant='outlined'
            value={formData.department}
            onChange={handleInputChange}
            required
          />
          <TextField
            sx={inputStyle}
            id='bloodGroup'
            name='bloodGroup'
            label='Blood Group'
            variant='outlined'
            value={formData.bloodGroup}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.inputWrapper}>
          <TextField
            sx={inputStyle}
            id='district'
            name='district'
            label='District'
            variant='outlined'
            value={formData.district}
            onChange={handleInputChange}
            required
          />
          <TextField
            sx={inputStyle}
            id='thana'
            name='thana'
            label='Thana'
            variant='outlined'
            value={formData.thana}
            onChange={handleInputChange}
            required
          />
        </div>
      </form>
    </div>
  );
};

export default BasicInfo;
