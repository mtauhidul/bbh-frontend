import { Button } from '@mui/material';
import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import Navbar from '../../components/navbar/Navbar';
import BasicInfo from '../../components/regi/BasicInfo';
import BatchSelect from '../../components/regi/BatchSelect';
import Members from '../../components/regi/Members';
import Payment from '../../components/regi/Payment';
import Verify from '../../components/regi/Verify';
import { useData } from '../../state/data';
import styles from './registration.module.css';

const Registration = () => {
  const { state } = useData();
  const [phase, setPhase] = useState(1);
  const [error, setError] = useState(false);

  const handleNext = () => {
    switch (phase) {
      case 1:
        if (state.batch === '' || state.phoneNumber === '') {
          toast.error('Please enter all the required information correctly');
        } else {
          setPhase(2);
        }
        break;

      case 2:
        if (
          state.firstName === '' ||
          state.lastName === '' ||
          state.email === '' ||
          state.lastRoomNumber === '' ||
          state.department === '' ||
          state.bloodGroup === '' ||
          state.district === '' ||
          state.thana === ''
        ) {
          toast.error('Please enter all the required information correctly');
        } else {
          setPhase(3);
        }
        break;

      case 3:
        if (state.totalMembers.length < 1) {
          toast.error('Please enter all the required information correctly');
        } else {
          setPhase(4);
        }
        break;

      default:
        break;
    }

    setError(error);
  };

  const changePhase = () => {
    setPhase(phase + 1);
  };

  const handleBack = () => {
    setPhase(phase - 1);
  };

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
            {phase === 4 && (
              <Verify changePhase={changePhase} handleBack={handleBack} />
            )}
            {phase === 5 && <Payment />}
          </div>
          <div className={styles.nextButtonWrapper}>
            <Button
              onClick={handleNext}
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
      <Toaster />
    </div>
  );
};

export default Registration;
