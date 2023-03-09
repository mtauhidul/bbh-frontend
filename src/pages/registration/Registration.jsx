import { Button } from '@mui/material';
import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import BasicInfo from '../../components/regi/BasicInfo';
import BatchSelect from '../../components/regi/BatchSelect';
import Members from '../../components/regi/Members';
import styles from './registration.module.css';

const Registration = () => {
  const [phase, setPhase] = useState(1);
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.leftImageWrapper}></div>
        <div className={styles.rightFormWrapper}>
          <h1 className={styles.formTitle}>
            Fill the form to be a <br /> part of this great event
          </h1>
          <div className={styles.form}>
            {phase === 1 && <BatchSelect />}
            {phase === 2 && <BasicInfo />}
            {phase === 3 && <Members />}
          </div>
          <div className={styles.nextButtonWrapper}>
            <Button
              onClick={() => setPhase(phase + 1)}
              sx={{
                minWidth: '12.5rem',
                fontWeight: '600',
                fontSize: '1rem',
                padding: '0.5rem 1rem',
                backgroundColor: '#34373B',
                color: '#fff',

                '&:hover': {
                  backgroundColor: '#fff',
                  color: '#000',
                },
              }}
              variant='contained'>
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
