import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import styles from './home.module.css';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.home}>
      <Navbar />
      <h1>Bangabandhu Sheikh Mujibur Rahman Hall</h1>
      <h2>Jahangirnagar University</h2>
      <Button
        onClick={() => navigate('/about')}
        sx={{
          color: 'white',
          borderColor: 'white',
          width: '200px',
          height: '50px',
          fontSize: '18px',
          '&:hover': {
            color: 'black',
            borderColor: 'black',
            backgroundColor: 'white',
          },
        }}
        variant='outlined'>
        Know more
      </Button>
    </div>
  );
};

export default Home;
