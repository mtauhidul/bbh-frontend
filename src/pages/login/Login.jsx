import { Button, TextField } from '@mui/material';
import React from 'react';
import { toast, Toaster } from 'react-hot-toast';
import styles from './login.module.css';

const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      username,
      password,
    };

    if (user.username !== '' && user.password !== '') {
      toast.success('Login successful');
    } else {
      toast.error('Please enter username and password correctly');
    }
  };
  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm}>
        <h1 className={styles.loginTitle}>Admin Login</h1>
        <TextField
          sx={{
            width: '100%',
            marginBottom: '1rem',
          }}
          onChange={handleUsernameChange}
          id='outlined-basic'
          label='Username'
          variant='outlined'
          type={'text'}
        />

        <TextField
          sx={{
            width: '100%',
            marginBottom: '1rem',
          }}
          onChange={handlePasswordChange}
          id='outlined-basic'
          label='Password'
          variant='outlined'
          type={'password'}
        />

        <Button
          sx={{
            width: '100%',
            height: '3rem',
            fontSize: '1rem',
            marginBottom: '1rem',
          }}
          onClick={handleSubmit}
          variant='contained'>
          Login
        </Button>
      </form>
      <Toaster />
    </div>
  );
};

export default Login;
