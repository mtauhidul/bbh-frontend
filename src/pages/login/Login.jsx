import { Button, CircularProgress, TextField } from '@mui/material';
import React from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { SignIn } from '../../services/api';
import styles from './login.module.css';

const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();

  const loginNow = (token) => {
    localStorage.setItem('user', token);
    navigate('/dashboard');
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const res = await SignIn(username, password);

    if (res !== '') {
      loginNow(res);
      toast.success('Login successful');
    } else {
      toast.error('Please enter username and password correctly');
      setLoading(false);
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
          {loading ? <CircularProgress color='inherit' size={20} /> : 'Login'}
        </Button>
      </form>
      <Toaster />
    </div>
  );
};

export default Login;
